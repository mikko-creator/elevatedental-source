# IMAGERY SYSTEM, elevatedental (Elevate Dental)

Status: CURATION, NOT GENERATION. Zero images have been generated and zero fal spend is
authorised or required. `_imagery-map.json` records the machine readable decision:
`mode: CURATION`, 594 first party files copied by the seam, 457 usable masters,
47 pages needing imagery, 47 pages mapped, 0 generation gaps, $0.00 fal spend.

This document is the REVIEWABLE half of that decision. `_imagery-map.json` says WHICH file
goes on WHICH page. This says WHAT the look is, WHAT may never be shown, and HOW to add
more without breaking either.

Derived from, and never inventing beyond:

* `_imagery-map.json` (the per page pools, the consent constraint, the review watchlist)
* `_handoff/client-rules.json` (`placeholder_rules.other_placeholders.clinical_images`,
  `proof_rules.claims.clinical-image-library`, `prelaunch_blockers` B-2)
* `_handoff/content-bible.md` and `_handoff/visual-direction.md` (C7)
* `_SECTOR-BLUEPRINT-RECONCILIATION.md` Collision B (warm imagery, calm voice)

---

## 1. TREATMENT, the look every photograph on this site obeys

One sentence: real clinical photography of this practice's own rooms, instruments and
appointments, lit warm and even, shot at working distance rather than as a hero portrait,
carrying no claim that the copy beside it does not already carry.

| input | source | what it forces |
|---|---|---|
| `mode: CURATION` | `_imagery-map.json` rationale | Every photograph is a first party file that already existed on the practice's own site. Nothing is generated. On a medical site a generated image standing in for a clinician, a patient or a clinical result is fabricated proof. |
| `surface_dominance: warm-light-with-photographic-bands`, `dark_ratio 0.2` | C7, amended 2026-08-25 | Photographs still sit as framed media objects through the body of a page, on WARM light bands. What changed: each page now opens with ONE full-bleed photographic band, and that band's scrim IS the page's dark punctuation. The previous row read "no photograph is used as a full bleed wash behind copy, and no photograph supplies a section's contrast" — a faithful derivation from a `dark_ratio 0` measurement of the OLD site, and the single line that made the owner's chosen direction illegal. Superseded by owner decision, not by drift. The limit that remains: ONE such band per page, and the scrim darkens only the lower band where type sits, never the subject. |
| `energy: warm` | C7, amended 2026-08-25 | Still no motion blur and no aspirational lifestyle framing: the subject remains the room, the instrument or the appointment. What "warm" changes is scale and welcome, not honesty. A wider, closer, more human crop is right where it reads as the practice inviting someone in; it stays wrong where it dramatises a clinical result. The previous value was `restrained`, derived from the old site's measured tone. |
| Collision B, warm imagery with a calm voice | `_SECTOR-BLUEPRINT-RECONCILIATION.md` | Warmth comes from the photograph. Certainty comes from the sentence beside it. Neither does the other's job. |
| No text baked into an image | C7 | No caption, badge, price or figure is burned into a file. Captions are markup (`.kit-slot__cap`), never pixels. |

Composition rules that follow:

1. **A photograph is evidence or it is not placed.** If a band has no admissible photograph,
   the band ships without one and says why in prose. An empty stage is honest; a borrowed
   smile in a clinical result's place is not.
2. **Text sits beside or under the frame — except in the one hero band per page.**
   AMENDED 2026-08-25 for FRONT OF HOUSE. Through the body of a page this rule is unchanged and
   still governs: the `.kit-slot` family carries the frame and the caption, and body copy is not
   positioned over photography. The single exception is the page's opening full-bleed band, where
   the headline sits in the lower third over a bottom-weighted gradient scrim.
   The exception is deliberately narrow, because the original rule was protecting something real:
   type over a photograph is where legibility quietly fails and where a designer is tempted to
   fade the image until the words show. Conditions on the exception: ONE band per page; the scrim
   covers only the lower band, never the subject; contrast is MEASURED at every breakpoint rather
   than eyeballed; and if a frame needs more than a lower-band gradient to carry its headline it
   is the wrong frame, and the fix is a different photograph.
3. **Alt text describes what is in the frame,** not what the section argues. Every alt string
   in this build was written after opening the file.

---

## 2. THE LOCKED SET

The locked set is `_imagery-map.json`. Every page carries a `primary` plus a `pool`, drawn
from the 457 usable masters in `assets/`. A page may compose from ITS OWN pool. It may not
reach into another page's pool for something that "kind of fits".

Placement discipline per page type:

| slot | orientation | frame | rule |
|---|---|---|---|
| Stage or hero media beside a copy column | portrait or landscape as the file allows | `.kit-slot__mask--frame` (4:3 cap) | The frame caps the media so it can never balloon the row. `width` and `height` attributes are the file's REAL measured pixels. |
| Media stretched against a card grid | landscape | `.kit-mediagrid__media` | Stretches with the track, `width: 100%`, `min-width: 0`. |
| Shaped media punctuation | any | `.kit-slot__mask--arch` | At most one arch masked frame per page. |

### 2a. Pages covered by this pass (T-FEATURE, template concept B)

| page | images placed | source |
|---|---|---|
| `technology` | 5 of the 7 in its pool | imaging room, patient positioned in the unit, radiograph read at a laptop, radiograph shown to a patient on a tablet, radiograph close up |
| `airflow` | 6 of the 8 in its pool, the 2 before/after files EXCLUDED | consultation, the AirFlow handpiece in use, cleaning comparison, brackets, treatment room |
| `oral-prophylaxis` | 6 of the 7 in its pool | consultation, scaling, cleaning types, brackets, clinic room |
| `dental-fillings` | 4 of the 4 in its pool | this page is on the review watchlist at 4 matches and its section count is composed DOWN to suit the pool rather than padding a thin pool across more bands |
| `composite-or-direct-veneers` | 5 of the 8 in its pool | shade matching, chairside sculpting context, finished anterior work, treatment planning |
| `laser-teeth-whitening` | 4 of the 8 in its pool, the 4 before/after files EXCLUDED | shade guide against the teeth, in clinic session context, cosmetic planning |
| `porcelain-veneers` | 6 of the 8 in its pool | the appliance, laboratory units, shade agreement, examination, shade prescription, finished anterior work |

### 2b. Slots deliberately NOT filled, and why

| slot | refused because |
|---|---|
| Every before and after gallery, all 8 treatment pages that have one | PRE LAUNCH BLOCKER B-2. The 138 before/after clinical files carry NO documented owner authorisation. `client-rules.json` `proof_rules.claims.clinical-image-library` records the claim as `blocked`. The files are usable for BUILD review only. They are placed on ZERO published pages. |
| Any "result" photograph on a Results stage | Same blocker, one step removed. `placeholder_rules.other_placeholders.clinical_images` states plainly: a stock "result" photo is a fabricated outcome claim. The Results stage on every page in this pass ships as prose with the hold stated in a visible truth block. |
| Named clinician portraits on a treatment page | `proof_rules.claims.per-clinic-roster` is `blocked`. A face beside a treatment implies an assignment no receipt supports. Bench stages name DISCIPLINES, not people. |
| A photograph of a named system that is not photographed | Only some of the eight named systems appear in the asset library. Where no first party photograph of a system exists, the band names the system in type and does NOT substitute a lookalike machine. |
| Any clinic exterior used as a map pin or a per clinic capability claim | Only the four clinic scope of 3D CBCT imaging is confirmed. A photograph may not carry a per clinic capability the table marks as pending. |

---

## 3. THE HONESTY PERIMETER

1. **No image on this site may depict a patient result, a named clinician, or a capability
   the copy is not cleared to claim.** That is fabricated proof, not decoration.
2. **Photography is context, never evidence.** Where an image would imply something factual
   that no receipt supports, the section is composed to work without a photo.
3. **Consent is a publication gate, not a content gap.** B-2 stays open until a signed
   release exists. Nothing in this document may be read as waiving it.

---

## 4. PER TOPIC LAW AND THE REUSE CAP

**PER TOPIC.** A page draws from its own pool in `_imagery-map.json`. Three pages in this
pass share files with a sibling (`airflow` and `oral-prophylaxis` overlap on three cleaning
files; the four veneer and whitening pages overlap on the cosmetic pool). Where an overlap
exists, each page takes a DIFFERENT cut of the pool so two sibling pages never read as the
same gallery.

**THE HARD REUSE CAP**, enforced by `verify-image-reuse-cap.mjs` on every page write:

* No single NON-HERO photograph repeats more than 2 times within a page. The hero is exempt.
* A page with 4 or more images must carry distinct assets at or above `ceil(total / 2)`.
* No generic pool concentration. This build declares NO generic pool: `_imagery-map.json`
  sets no `generic` flag, so every placed file is topic imagery by construction and the
  rule is inert here by design rather than by omission.

Every page in section 2a places each file exactly ONCE, so the cap has headroom on all seven.

---

## 5. ORIENTATION AND THE MEASURED PIXEL RULE

1. The `image_size` of a slot is dictated by the SECTION PATTERN it lives in, never by taste.
   Media beside a copy column is capped by the 4:3 frame mask; media stretched against a card
   grid takes the track.
2. `width` and `height` attributes carry the file's REAL measured pixels, read from the file
   header, not a guess and not the CSS box. Several masters in this library are small
   (320 x 320, 623 x 512, 675 x 585). A small master is placed in a SMALL slot. It never
   leads a full bleed band, because upscaling a 320px file to a hero is a visible quality
   failure and the locked sheet gives no full bleed band anyway.
3. Every framed media element inherits `width: 100%` and `min-width: 0` from the locked
   structural sheet, so no media can burst its grid track.

---

## 6. FAL EXTEND ALLOWANCE

Generation is the EXCEPTION on this build and it is fenced, not forbidden:

* **Never generate a person, a mouth, a tooth, a clinical result, a clinician, a patient, a
  named system, or a clinic interior presented as one of the four clinics.** On a medical
  site each of those is fabricated proof. This is the whole reason `mode` is CURATION.
* Generation may only be considered for ABSTRACT, non evidential texture where no first party
  file exists and the section genuinely needs a material rather than a photograph.
* Any such addition requires: a real visual need named in a brief, an owner receipt, a new row
  in section 2, and a re run of the gates. Spend is owner gated and currently $0.00 with no
  authorisation on file.

---

## 7. OWNER SUPPLIED ASSETS TAKE PRECEDENCE

Every image on this site is owner supplied. That is the entire library. The intake counted
594 files copied, 457 usable as masters after the small and duplicate files were set aside,
and 138 of the remainder are the consent blocked before/after set held under B-2.

---

## 8. SIGN OFF

| item | state |
|---|---|
| Mode | CURATION |
| Usable first party masters | 457 |
| Pages mapped | 47 of 47 |
| Generation gaps | 0 |
| Images generated | 0 |
| fal spend to date | $0.00 |
| Owner authorisation to spend | NOT REQUESTED, NOT REQUIRED |
| Consent blocked files placed on a page | 0 |
| Blocker B-2 | OPEN. Owner authorisation not supplied. |
