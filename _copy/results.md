# Copy - Results and Patient Stories

slug: results
type: T-INDEX
filter_fields: category, tags, treatment, clinic
sort: treatment, recency
funnel_role: consideration
cta_primary: Book an Appointment
links_to: treatments, specialists, contact
source_brief: `_handoff/briefs/results.md`
stage: (4) COPY, authored 2026-08-14

> **NOT PUBLISHABLE AS WRITTEN.** Blocker B-2 is open: no documented owner authorisation exists for the clinical image library, and none exists for republishing the text of the patient stories. This page is designed and written; it is not deployed. Every item slot below is a marked placeholder. See "Build notes" at the foot of this file.

---

## §1 - Hero and filter

**H1:** Dental Before and After Philippines. Patient Results.

**Deck:** Real cases, filtered to yours. Before and after images grouped by the treatment that produced them, and 74 published patient testimonials in the patients' own words. Filter by treatment, by clinic or by case type, so you are looking at work that resembles your own situation rather than a wall of somebody else's teeth.

**Standing note beneath the deck:** Every case shown is an individual outcome. Dentistry is not uniform, and what a case took for one patient is not a forecast for yours. What these cases show you is the standard of work and the range of what our specialists treat. What your own case needs is settled at examination.

### Filter toolbar

**Filter by treatment**
All treatments · Porcelain veneers · Zirconia veneers · Direct veneers · Invisalign (Clear Aligners) · Braces · Dental implants · Dental crowns and bridges · Zoom teeth whitening · Root canal treatment · Full-mouth rehabilitation

**Filter by case type**
All · Before and after · Patient story

**Filter by clinic**
All clinics · Mitsukoshi BGC · Shangri-La Plaza · Bonifacio Stopover BGC · Alabang Town Center

**Filter by tag**
Single tooth · Multiple teeth · Full arch · Front teeth · Bite correction · Missing tooth · Discoloration · Wear and chipping

**Sort**
By treatment (default) · Most recent first

**Filter status line, always visible:** Showing [n] of [total] cases.

**Empty state, shown whenever a combination returns nothing:** No cases match that combination yet. That is a gap in what we have published, not a gap in what we treat. Clear one filter to widen the search, browse by treatment below, or Book an Appointment and ask a specialist about your own case directly.

---

## §2 - Featured

A small pinned set sits above the full list. These are chosen for what they demonstrate, not for how recent they are: cases where the plan was the interesting part, where more than one discipline was involved, or where the starting position was the kind most people assume cannot be treated.

Each featured case carries the treatment performed, the disciplines involved and the number of visits it took, so you can read it as a piece of clinical work rather than as a picture.

> **[OWNER-DATA REQUIRED, OWNER-BLOCKED]** The featured slots are empty by design. Publishing a before and after image, or the text of a patient story, requires a owner authorisation naming this website as a place of publication. No release is on file. Supply, per case: the signed release, the treatment performed, the disciplines involved, the visit count and the clinic. Do not substitute stock photography for a clinical case; a stock image in a results slot is a fabricated outcome, not a placeholder.

**Featured slot template, per item:**
- Case reference
- Treatment performed
- Disciplines involved
- Number of visits
- Clinic
- Before image and after image, same angle, same lighting
- One line on what the case required
- Link to the treatment page

---

## §3 - The list

The gallery is segmented by treatment rather than presented as one carousel, because a patient researching veneers has no use for scrolling through implant cases to find them.

### Veneers

Porcelain (Emax), zirconia and direct composite cases, shown by material, because material is what drives both the look and the fee. Veneer cases are planned on a RayFace 3D facial scan, so the proportions are set against the whole face rather than against the tooth in isolation. Read the [porcelain veneers](/porcelain-veneers/), [zirconia veneers](/zirconia-veneers/) and [direct veneers](/composite-or-direct-veneers/) pages for how each is done.

### Invisalign (Clear Aligners)

Alignment cases planned on an iTero intraoral scan, which produces the digital model the aligner sequence is built from. Cases are grouped by what was being corrected: crowding, spacing, or a bite issue. Course lengths differ case by case, and the case card states the actual length rather than an average. See the [Invisalign page](/invisalign/).

### Implants

Single tooth, multiple teeth and full arch. Every implant case is planned on 3D CBCT imaging, which is available at all four clinics, so the bone is assessed in three dimensions before anything is placed. The card states how many implants were placed and over how long. See the [dental implant page](/dental-implant/).

### Whitening

Zoom teeth whitening, light-activated, carried out in the clinic in a single session. Whitening cases are shown against a shade guide rather than against a change in lighting, which is the honest way to photograph them. See the [teeth whitening page](/laser-teeth-whitening/).

### Full-mouth rehabilitation

The cases that need more than one discipline: prosthodontics for the restorations, periodontics for the foundation, oral surgery where teeth have to come out first. Bite is checked with OccluSense digital bite analysis before the final work is fitted. These cases run over months, and the card says how many.

> **[OWNER-DATA REQUIRED, OWNER-BLOCKED]** Every segment above ships empty until owner authorisations exist. The segment copy stands; the cases inside it do not exist yet as publishable items.

**Repeating item template, declared once and reused by every card in every segment:**
- `data-category`: before-and-after, or patient-story
- `data-treatment`: the treatment slug
- `data-clinic`: the clinic slug
- `data-tags`: one or more of the tag list in section 1
- `data-date`: publication date, used by the recency sort
- Visible fields: treatment name, clinic, visit count, one line of clinical context, and the case images or the quoted story

**On patient stories:** the published testimonials are quoted exactly as the patient wrote them, in whatever language they wrote them in. They are not translated, shortened or tidied. [OWNER-BLOCKED: republishing testimonial text requires the same documented consent as the images. The count is verified and may be stated; the content may not be republished until consent is on file.]

---

## §4 - Routing

If nothing here matches your case, the answer is almost certainly that we have not published it yet, not that we do not treat it.

**By treatment.** The [full treatment list](/treatments/) covers all twenty treatments, grouped by the specialist discipline that performs them, each with a starting price.

**By specialist.** If you would rather choose the clinician than the procedure, the [specialists page](/specialists/) lists the whole bench by discipline.

**By question.** If you are not sure what your case even is, that is what the consultation is for. Describe it at the desk or on the phone and a specialist will tell you what the options are before any figure is discussed.

**By fee.** If cost is the thing holding you back, the [price list](/prices/) publishes a starting price for every treatment on this page.

---

## §5 - Closing CTA

Looking at other people's cases only gets you so far. Yours needs an examination, an image and a specialist looking at both.

Book a free consultation at any of our four Metro Manila clinics. You leave with a written treatment plan and a written quote, and no commitment to start.

**CTA:** Book an Appointment

*Build note: rendered through the inherited chrome closing band. Per Collision A in `_SECTOR-BLUEPRINT-RECONCILIATION.md`, the body authors zero standalone closing CTA bands.*

---

## Outcome row

**FEATURE:** Results and patient stories you can filter to your own case, by treatment, clinic, case type and tag.
**DO:** Find the relevant one in seconds.
**MEANS:** You see evidence that matches your situation, not a generic wall.

---

## Build notes (not page copy)

1. **B-2 is the governing constraint.** Neither the clinical images nor the text of the patient stories may be published without a documented release, so every item slot is a marked placeholder and no case content has been written. The count of published testimonials is separately cleared and is stated once, in section 1.
2. **Image count withheld.** The size of the before and after library is blocked for publication alongside the images themselves, so no figure for it appears anywhere in this copy.
3. **No outcome typicality.** The standing note under the deck states the opposite: each case is an individual outcome and is not a forecast. This is deliberate, and it also keeps the page clear of the phrase this slug blocks.
4. **Rationed claim used once.** The testimonial count is permitted on this slug at one occurrence per page and appears exactly once, in the deck. Specialist count, discipline count and the "one roof" line are rationed away from this slug and do not appear.
5. **Filter honesty.** The brief requires that a filter never return zero items silently. Section 1 carries a persistent count line and a written empty state that routes the visitor onward rather than leaving them on a blank grid.
6. **Stock imagery is prohibited here,** not merely discouraged. A stock photograph in a results slot is a fabricated clinical outcome. Flagged in section 2. Zero exclamation marks. Zero em or en dashes.
