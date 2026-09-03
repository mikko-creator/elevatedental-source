# SECTOR BLUEPRINT RECONCILIATION - elevatedental

**Stage:** P7.75 / pre-① · **Written:** 2026-08-14
**Sources:** `.claude/design-system-unified/40-research/composition-medical-health.md` §4 · `_handoff/visual-direction.md` (C7) · `_handoff/client-rules.json` (C3) · SKILL.md CWB-068

> **Why this file exists.** CWB-068: the MediMarketing author OPENED the sector blueprint and cited it, but did not APPLY its imagery moves, and shipped a fail. The rule is that a credibility/imagery vertical with zero imagery signature-moves applied is an automatic FAIL. So the 8 moves are enumerated HERE, before ① composes anything, with the applied/omitted decision recorded per move. Two of them collide with locked constraints; both collisions are resolved below rather than discovered at gate time.

## The 8 medical-health signature moves, decided

| # | Signature move | Decision for elevatedental |
|---|---|---|
| 1 | Appointment CTA as the spine, repeated 3-4x per page | **APPLY, with a constraint** (see Collision A) |
| 2 | Services-grid-first (G4 icon-tile grid as the page's table of contents) | **APPLY.** Elevate has 9 disciplines and 20 treatments; the grid is the natural router and the IA already commits to it. |
| 3 | Trust stacked: counters (I3) -> named team with faces (H2 portraits) -> testimonials + explicit rating | **APPLY, PARTIALLY.** Counters: yes (31 specialists / 9 disciplines / 4 clinics / CBCT at all four). Named team with faces: yes, this is the lead wedge and 60 portrait files exist. Testimonials: yes, 74 published. **Explicit rating: OMITTED** - the only rating available is the unsourced "4.8" retired by C4 content-bible §2. It returns only if the client supplies platform, count and date. |
| 4 | Warm, human, first-person voice + H2/H5 circle-masked imagery + the A2 arc divider | **SPLIT DECISION** (see Collision B). Imagery moves: APPLY. Voice: DO NOT apply the blueprint's first-person warmth. |
| 5 | A "welcome + hours + get-in-touch" intro band between hero and services | **APPLY.** Elevate has four clinics with four genuinely different schedules, so hours-up-front is practical reassurance, not filler. |
| 6 | Conversion is EITHER pricing (G6) OR education (G5), never both | **PRICING (G6).** Decision F1 committed to "from" price floors per treatment. This is the whole point of the rebuild. Education is demoted to the Insights hub, not used as the conversion mechanism. |
| 7 | Inner pages pair a price-list table (I6) with a FAQ accordion (I9) | **APPLY.** The 19 T-FEATURE treatment briefs already carry both a price section and a FAQ section, so the brief and the blueprint agree. |
| 8 | Glass + tinted-surface washes are on-register for medical | **APPLY, SPARINGLY.** C7 measured the brand as light-dominant and restrained, so tint washes are the calming register; heavy glass is not. |

## Collision A - "CTA repeated 3-4x" vs G-CTA1 "exactly ONE closing CTA band"

**The conflict.** The blueprint's move 1 wants the appointment CTA 3-4 times per page. Gate G-CTA1 fails closed when the full page (chrome + body) carries more than ONE closing/quote-CTA BAND, and the chrome `.precta` already IS that one band.

**These are not actually in conflict, because they count different things.** G-CTA1 counts dedicated closing BANDS (a heading plus a lone conversion button with little else). It explicitly never counts inline CTAs.

**Resolution, binding on every template:**
- Header-pinned "Book an Appointment": allowed, always present, not a band.
- Hero primary button: allowed, inline, not a band.
- Mid-page CTA: allowed ONLY folded inline inside a content-bearing section (for example inside the price info block or at the end of a treatment's procedure section). It may not be a standalone heading-plus-button band.
- The single closing band: the chrome `.precta`, inherited. **The body authors ZERO closing bands.**

That yields the blueprint's 3-4 CTA touchpoints while keeping the closing-band count at exactly 1.

## Collision B - blueprint voice vs C7 measured tone

**The conflict.** Move 4 prescribes a warm, human, first-person hero voice ("Hi, I'm...", "Welcome to our home"). C7's measured signature is `energy: restrained`, and C4 locks the register as luxury / premium-clinical / calm / specific.

**Resolution, per SKILL.md:** "Where the vertical's generic mood and §0 disagree, §0 wins on TONE and the vertical wins on these hard rules."

- **Voice: C7 wins.** No first-person warmth, no "Welcome to our home". The hero carries the locked lead, "Nine disciplines. Thirty-one specialists. One clinic." Calm and specific beats warm and generic here, and it is also what the positioning is built on.
- **Imagery and structure: the blueprint wins.** Circle-masked / large-radius photography, the A2 arc seam, tint washes, portrait treatment for the 31-person bench. These are the moves MediMarketing skipped and failed on, and Elevate has 138 clinical images plus 60 portraits to honour them with.

The net register: warm IMAGERY, calm VOICE. That is a coherent position, not a compromise.

## Imagery floor (the CWB-068 automatic-fail check)

A credibility vertical shipping zero imagery signature-moves is an automatic FAIL. Elevate must therefore ship, at minimum:
1. Real photography in the hero (not a token-built surface).
2. Circle-masked or large-radius treatment on clinician portraits.
3. The A2 arc seam at least once as a section transition.
4. Treatment/clinic imagery on the discipline and branch pages.

All four are supportable from the 594 real assets already copied into `assets/`. **No grey boxes anywhere a photo belongs.**

## Constraint carried from the waiver

Both waived blockers constrain what the design must accommodate:
- Every price figure is a representative placeholder, so price presentation must be a swappable pattern that survives a change in digit count.
- The 138 clinical images may be BUILT with but not PUBLISHED until consent is documented. The case gallery is designed, not deployed.

---

**Recorded by:** Claude (client-site-build, pre-①) · to be re-confirmed per page at ⑤ TEMPLATES and P14
