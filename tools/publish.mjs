/* Publish the built site into a flat GitHub Pages target.
 *
 * Usage:  node tools/publish.mjs <target-dir>
 *
 * A Pages site is served from the repo root, so the two source prefixes are rewritten:
 *     ../_design/  ->  design-system/
 *     ../assets/   ->  assets/
 *
 * ASSETS ARE MIRRORED RECURSIVELY. They used to be a flat folder and this script copied files
 * only; once assets/ grew provenance subfolders (first-party, generated, responsive, ...) a
 * flat copy would have published 49 pages with every image 404ing, and it would have looked
 * like a success because the pages themselves copy fine. The walk below is the fix, and the
 * reference check at the end is the proof.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const SRC = path.join(os.homedir(), 'Oso', 'Code', 'client-sites', 'elevatedental');
const TARGET = process.argv[2];
if (!TARGET || !fs.existsSync(TARGET)) { console.error('target missing: ' + TARGET); process.exit(1); }

const rw = (html) => html
  .split('../_design/').join('design-system/')
  .split('../assets/').join('assets/');

// ---- pages -----------------------------------------------------------------
const pages = fs.readdirSync(path.join(SRC, 'pages'))
  .filter((f) => f.endsWith('.html') && !f.endsWith('.content.html'));

for (const f of fs.readdirSync(TARGET)) {
  if (f.endsWith('.html') && f !== 'index.html' && !pages.includes(f)) {
    fs.unlinkSync(path.join(TARGET, f));
    console.log('  removed stale page ' + f);
  }
}
let n = 0;
for (const f of pages) {
  const out = rw(fs.readFileSync(path.join(SRC, 'pages', f), 'utf8'));
  if (/\.\.\//.test(out)) { console.error('  !! ' + f + ' still contains ../ after rewrite'); process.exit(1); }
  fs.writeFileSync(path.join(TARGET, f), out, 'utf8');
  n++;
}
console.log(`  pages: ${n}`);

// ---- assets, recursively ---------------------------------------------------
function mirrorTree(from, to, filter = () => true) {
  fs.mkdirSync(to, { recursive: true });
  const want = new Set();
  const walk = (dir, rel = '') => {
    for (const e of fs.readdirSync(dir)) {
      const p = path.join(dir, e);
      const r = rel ? rel + '/' + e : e;
      if (fs.statSync(p).isDirectory()) walk(p, r);
      else if (filter(e)) want.add(r);
    }
  };
  walk(from);

  // drop anything in the target that the source no longer has
  const present = [];
  const walkTo = (dir, rel = '') => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir)) {
      const p = path.join(dir, e);
      const r = rel ? rel + '/' + e : e;
      if (fs.statSync(p).isDirectory()) walkTo(p, r);
      else present.push(r);
    }
  };
  walkTo(to);
  for (const r of present) {
    if (!want.has(r)) { fs.unlinkSync(path.join(to, r)); console.log('  removed stale ' + path.basename(to) + '/' + r); }
  }

  for (const r of want) {
    const dst = path.join(to, r);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(path.join(from, r), dst);
  }
  return want.size;
}

console.log(`  assets: ${mirrorTree(path.join(SRC, 'assets'), path.join(TARGET, 'assets'), (f) => !f.endsWith('.html'))}`);
console.log(`  design-system: ${mirrorTree(path.join(SRC, '_design'), path.join(TARGET, 'design-system'), (f) => f.endsWith('.css'))}`);

// ---- root files ------------------------------------------------------------
for (const f of ['robots.txt', 'sitemap.xml', 'favicon.png']) {
  const p = path.join(SRC, f);
  if (fs.existsSync(p)) fs.copyFileSync(p, path.join(TARGET, f));
}
fs.writeFileSync(path.join(TARGET, '.nojekyll'), '', 'utf8');

// ---- prove every local reference resolves ON DISK ---------------------------
let checked = 0, missing = 0;
for (const f of pages) {
  const html = fs.readFileSync(path.join(TARGET, f), 'utf8');
  for (const m of html.matchAll(/(?:src|href)="((?!https?:|mailto:|tel:|#|data:)[^"]+)"/g)) {
    const rel = decodeURIComponent(m[1].split('?')[0].split('#')[0]);
    if (!rel || rel.endsWith('/')) continue;
    checked++;
    if (!fs.existsSync(path.join(TARGET, rel))) {
      if (missing < 6) console.error('  MISSING: ' + rel + '  (referenced by ' + f + ')');
      missing++;
    }
  }
}
if (missing) { console.error('  !! ' + missing + ' of ' + checked + ' local references do not resolve'); process.exit(1); }
console.log('  every local href/src resolves on disk (' + checked + ' checked)');
