# Elevate Dental

Source tree for the Elevate Dental site: 49 pages, a shared chrome carrier, a
design-system CSS stack and the full image library.

This is the SOURCE. The published output lives in two separate repositories and
is generated from here; nothing in those repos should be edited by hand.

## Layout

| Path | What it is |
|---|---|
| `pages/` | One `<slug>.content.html` per page (the source) and its built `<slug>.html` |
| `_design/` | The CSS stack, and `_chrome-block.html`, the shared header/footer carrier |
| `_handoff/` | The contract from the prep phase: client rules, fact registry, content bible |
| `assets/` | Images, scripts and icons (see below) |
| `tools/` | Publishing and maintenance scripts |
| `logs/` | Run logs |

## Assets

Organised by provenance, because provenance is what governs whether an image may
be used at all:

| Folder | Provenance | Rule |
|---|---|---|
| `assets/first-party/` | Supplied by the client, or already published on their live site | Usable |
| `assets/owner-supplied/` | Handed over directly by the owner | Usable; permission is by supply, not by prior publication |
| `assets/generated/` | Created with an image model | **Never** for a clinician, a patient, a clinical result, or a specific branded device |
| `assets/generated-systems/` | Created for the named-systems strip | Same rule |
| `assets/portraits-cutout/` | Clinician portraits with the background removed | Derived from first-party originals |
| `assets/responsive/` | Width variants (`-320w`, `-800w`, …) generated for `srcset` | Derived; never edited by hand |
| `assets/scripts/` | Front-end JavaScript | |

`assets/favicon.svg` deliberately stays at the top of `assets/`, unfoldered. The
build's shell template references `../assets/favicon.svg` by that exact path and
`build.mjs` re-seeds the file whenever it is missing, because the publish launch
floor refuses to ship a site without a favicon. Moving it into a subfolder does
not fail loudly; it silently produces a second copy on the next build. Leave it
where it is.

The imagery contract is `mode: CURATION`. Generation is the exception, and on a
medical site a generated image standing in for a clinician, a patient or a
clinical result is fabricated proof. See `_handoff/_imagery-map.json`.

## Build

```
node <skill>/scripts/build.mjs --site . [slug ...]
```

A single slug rebuilds one page (~40s); no argument rebuilds all 49 (~25min).
The build fails closed: a page that trips a gate is not emitted.
