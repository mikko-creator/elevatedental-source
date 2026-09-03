# Copy - Promos

slug: promos
type: T-INDEX
filter_fields: category, tags, treatment, clinic, date
sort: end date
funnel_role: consideration
cta_primary: Book an Appointment
source_brief: _handoff/briefs/promos.md
seo_title: Dental Promos Philippines - Current Offers

---

## §1 - Hero and filter

**Eyebrow:** Offers

**H1:** Current Offers

**Deck:** Only offers that are running right now. Each one carries the date it ends.

**Body:** An offer that has passed its end date is archived automatically and stops appearing here. If it is on this page, it is live today. If a date has passed, it is gone, not grayed out and not quietly left up.

Every offer is subject to clinical assessment. A discount changes what a treatment costs. It does not change whether that treatment is the right one for your case, and our specialists will tell you if it is not.

**Filter toolbar**

- **Category.** Cosmetic, orthodontics, general dentistry, whitening.
- **Tags.** As tagged per offer.
- **Treatment.** The specific treatment the offer applies to.
- **Clinic.** Mitsukoshi BGC, Shangri-La Plaza, Bonifacio Stopover BGC, Alabang Town Center, or all four.
- **Ends.** Filter by the date an offer closes.

**Sort:** By end date, soonest first. What expires first sits first.

**Empty state, when a filter combination returns nothing:** No current offer matches those filters. Clear one filter to widen the list, or see all current offers. If nothing is running for the treatment you want, the price list carries a starting figure for every treatment.

---

## §2 - Featured

**H2:** Running now

**Body:** A small pinned set, chosen for what they are worth rather than for what was posted most recently. The rest of the current offers are in the list below.

**Featured item, currently running:**

**Anniversary offer: cosmetic treatments, all four clinics**
Runs 1 August to 31 August 2026.
Invisalign (Clear Aligners), up to 25% off. Zoom teeth whitening, up to 20% off. Emax veneers, up to 20% off.
Available at Mitsukoshi BGC, Shangri-La Plaza, Bonifacio Stopover BGC and Alabang Town Center. Terms and conditions apply.
**CTA:** Book an Appointment

`[OWNER-DATA - CONFIRM BEFORE PUBLISHING. The offer above is transcribed from the current site, where it is dated 1 to 31 August 2026 and is therefore live as at the build date. Confirm it is still running, and confirm the discount ceilings, before this page ships. An offer transcribed from a site that was not maintained is not the same thing as an offer the clinics will honor at the desk.]`

---

## §3 - The list

**H2:** All current offers

**Body:** One card per offer. The end date sits on the card, not in the terms, because the end date is the part that decides whether the offer is any use to you.

**Item template, declared once and repeated per offer:**

- **Offer title.** What it is, in plain words.
- **Runs from and to.** Both dates, always. An offer without an end date is not published.
- **What is included.** The treatment or treatments the offer applies to, and the reduction on each.
- **Where it applies.** Named clinics, or all four.
- **Conditions.** Minimum units, minimum spend, or first-time-patient limits, stated on the card rather than hidden behind an asterisk.
- **Action.** Book an Appointment.
- **Filter data carried per card:** category, tags, treatment, clinic, end date.

**The expiry rule, stated to the visitor:** Offers are removed from this page on the day after they end. Nothing here has expired. The archive is not displayed.

`[OWNER-DATA - PARTNER AND BANK OFFERS UNCONFIRMED. Card-partner and instalment offers on the current site carry 2024 end dates. No bank, no card issuer, no term, no minimum-spend threshold and no interest rate may be published until the client confirms in writing which partnerships are active in 2026. Any peso threshold shown before that confirmation is a REPRESENTATIVE-PLACEHOLDER and may not ship.]`

`[OWNER-DATA - PROVIDER-TIER AND WARRANTY LINES STRIPPED. Two claims attached to past offers on the current site are withheld: an aligner provider-tier description, which resets annually and is unconfirmed for the current year, and a multi-year treatment warranty, whose terms have never been published. Neither may return to an offer card without its receipt.]`

---

## §4 - Routing

**H2:** Nothing here for you today

**Body:** Offers are periodic, and the treatment you want may simply not have one running. That is worth saying plainly rather than leaving you to scroll.

- **By treatment.** Invisalign (Clear Aligners), braces, porcelain veneers, zirconia veneers, Zoom teeth whitening, AirFlow (guided biofilm therapy), dental implants, crowns.
- **By clinic.** Mitsukoshi BGC, Shangri-La Plaza, Bonifacio Stopover BGC, Alabang Town Center.
- **Price list.** A starting figure for every treatment, whether or not an offer is running against it.
- **Specialists.** The person matters more than the discount. Read who would be treating you.
- **New Patient Guide.** What a first visit involves, what to bring, and how payment works.

---

## §5 - Closing CTA

**H2:** Ask what applies to your case

**Body:** Bring the offer you are interested in to the consultation. Our specialists will tell you whether that treatment suits your case before anything is booked against it, and what the sequence would be if it does.

One thing to know before you plan around an offer: Elevate Dental does not accept HMO or dental insurance. All treatment is self-pay, offers included.

**Primary CTA:** Book an Appointment

---

## Outcome row

**FEATURE:** Offers you can filter to your own case.
**DO:** Find the relevant one in seconds.
**MEANS:** You see what applies to your situation, not a wall of expired promotions.

---

## Build notes

- **The defect this page exists to fix.** The current promos archive displays 17 expired promotions, several with contradictory dates, next to the live ones. The date-driven expiry rule in §3 is mandatory, not a nicety: it is the difference between a page that builds trust and one that quietly demonstrates the site is not maintained.
- **Exclamation policy.** The live promo copy is written almost entirely in exclamations. Every one has been removed. This page carries zero, which is the expected value in this register even though the policy permits one on time-boxed promotional content.
- **Terminology corrections applied.** The whitening system is named as Zoom teeth whitening, not as laser whitening. Clear aligners take their full canonical form on first mention. The cleaning system is named as AirFlow (guided biofilm therapy).
- **Rationed claims.** No specialist count, no discipline count, no one-roof phrasing, no testimonial count on this page. All are rationed away from `promos`.
- **Currency.** No peso figure ships on this page. The one place a figure would naturally sit, the instalment threshold, is owner-blocked and marked accordingly.
- **C2 title defect.** The SEO title for this row uses an en-dash separator, which would trip the dash ban when rendered. Recorded above with a plain hyphen, and the H1 is set independently of it.
