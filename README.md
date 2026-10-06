# Hospitality Cancun — cinematic landing page

A single-page, scroll-driven rebuild of **hospitalitycancun.com** (Costamed medical tourism,
Riviera Maya &amp; Cozumel). All copy, pricing, doctor profiles, legal text and imagery come from the
existing site — nothing was invented.

## Run it

```bash
python3 -m http.server 8181 --bind 127.0.0.1
# open http://127.0.0.1:8181/index.html
```

No build step, no dependencies to install. GSAP + ScrollTrigger are vendored locally in `assets/js/`, so the page makes no CDN requests.

**Or just double-click [standalone.html](standalone.html)** — a single self-contained file that needs no
server, no `assets/` folder and no internet connection. See [Standalone single-file build](#standalone-single-file-build).

## Files

| Path | Purpose |
|---|---|
| [index.html](index.html) | Full page markup, meta/OG tags, footer disclaimer + privacy policy |
| [styles.css](styles.css) | Design system, layout, responsive rules, motion preferences |
| [script.js](script.js) | Content data, renderers, interactions, cinematic animation layer |
| [standalone.html](standalone.html) | **Generated** single-file build — everything inlined (~13.3 MB) |
| [build-standalone.js](build-standalone.js) | Generator for `standalone.html` |
| `assets/img/` | Hero, services, trip, therapy, rewards and contact imagery |
| `assets/doctors/` | 12 doctor portraits |
| `assets/icons/` | Treatment-application icons and `header-icon.svg` favicon |

## Standalone single-file build

```bash
node build-standalone.js     # writes standalone.html from the sources above
```

Everything the page needs is base64-inlined into one HTML document: the stylesheet, the app script,
GSAP + ScrollTrigger, the Google webfonts (latin/latin-ext woff2), all 32 referenced images/icons and
the hero video. Verified by loading it from an otherwise empty directory: the document was the only
network request the page made, and all 64 images, both font families, the counters, the filter chips,
the package tabs, the price disclosures and the form validation behave exactly as in the multi-file build.

Trade-offs worth knowing:

- **Size.** ~13.3 MB. The bulk is the 5.7 MB hero video, which lands at roughly 7.8 MB once base64
adds its ~37%. Fine for a download, handoff or offline demo; heavy for a public page — keep the
multi-file version for anything served over the web.
- **Caching.** One file means one cache entry: any copy change re-downloads the imagery.
- **Sources are still the source.** Edit `index.html` / `styles.css` / `script.js`, then re-run the generator;
editing `standalone.html` directly is throwaway work.
- Vendored libs are bundled under their own licences (GSAP 3.12.5, MIT).

## Page flow

1. **Intro curtain** — logo, progress bar, curtain wipe into the hero
2. **Hero** — static auto-playing muted looping video background,
   with a masked line-by-line headline reveal (no hero parallax)
3. **Ticker** — marquee of services and destinations
4. **Care + stats** — animated counters (4 hospitals, 3 airports, 12 specialists, 10+ lenders)
5. **Services** — Plastic Surgery, Exosomes, Dental Procedures with 3D tilt cards
6. **Your trip** — Flights, Accommodations, Local transportation + image marquee
7. **Financing** — procedure picker driving the published `$10,077 → $420` example
8. **Stem cells & exosomes** — therapy explainers + 6 treatment applications
9. **Packages** — Stem cell / Exosomes / Stem cell + exosomes, Standard · Gold · Platinum
10. **Why Costamed** — 5 benefits
11. **Travel rewards card** — apply CTA
12. **Prices** — all 40 published procedures, filterable by specialty, expandable inclusions
13. **Doctors** — 12-specialist marquee with a keyboard-accessible pause/resume control
14. **Contact** — validated consultation form
15. **Footer** — disclaimer + full privacy policy in `<details>`

## Usability improvements

- Mobile navigation keeps the booking action inside the menu, closes on Escape/outside click/link selection, and returns keyboard focus to the menu button.
- Procedure discovery includes live search, specialty filters, sorting, an accessible result count, and a one-click reset when there are no matches.
- Each service card's **"Know more"** deep-links into the pricing grid pre-filtered to its own specialty (`data-filter-link` in [index.html](index.html), handled by `initServiceLinks()`), so Plastic Surgery lands on plastic-surgery prices and Dental Procedures on dental prices. Exosomes has no pricing category, so it still points at the stem-cells & exosomes section.
- The pricing grid shows the first **8** procedures behind a **"Show all N procedures"** button (`PROC_VISIBLE` in [script.js](script.js)). The control collapses back to "Show fewer", hides itself whenever a filter or search already fits in 8 results, and resets to collapsed on any filter/search/sort change.
- Procedure, package and financing inquiries carry the selected item into the contact message, focus that field, and clearly explain that the details have not been sent because no form endpoint is configured.
- The floating booking shortcut appears after the hero and stays out of the way while the visitor is already at the contact form.

## Content sources (verified against the live site)

- **40 procedures** with exact USD prices and hospital-night counts (rendered 8 at a time behind the "Show all" control)
- **9 treatment packages** across three tiers
- **12 doctors** with their exact specialties
- Both legal blocks (disclaimer, privacy policy) reproduced verbatim in the footer

## Palette

The whole interface is a single cool-blue system, defined once in `:root` in [styles.css](styles.css):

| Token | Value | Role |
|---|---|---|
| `--bg` / `--bg-2` / `--bg-3` | `#080a0e` / `#0d1017` / `#121620` | Page, panel and card surfaces |
| `--cream` | `#c7d9ec` | Primary accent: filled buttons, active chips/tabs, rules |
| `--green-lite` | `#dfeaf7` | Lightest accent: prices, figures, emphasised spans |
| `--green` | `#a9c1d8` | Mid accent |
| `--blue` / `--blue-deep` | `#7eaad6` / `#2f6ba6` | Gradients and glows |
| `--ink` | `#15131b` | Text on filled (light) accents |

There is no warm/pink tone anywhere in the UI. The only reds are semantic: `#ff6b6b` for invalid field
borders, `#ffadad` for field errors and `#ff8f8f` for the error form status — deliberately kept red so
failures stay distinguishable from the blue accent.

The logo ships in two variants: the original
[assets/img/LOGO_HOSPITALITYCANCUN.svg](assets/img/LOGO_HOSPITALITYCANCUN.svg) and a brightened
dark-mode cut ([assets/img/LOGO_HOSPITALITYCANCUN-onDark.svg](assets/img/LOGO_HOSPITALITYCANCUN-onDark.svg),
five blues/greens lifted for dark backgrounds). All three placements — intro, nav and footer — use the
onDark variant in its real brand colours at full opacity with no CSS `filter`, and the nav renders it
at 40 px (34 px on mobile) so it reads clearly against the near-black bar.

## Looping hero video

A single muted clouds-and-blue-sky clip is the fixed hero background. It autoplays inline and **loops**
(`loop` on), so the plate animates continuously instead of freezing on a final frame. No scroll or pointer
parallax is applied to the hero — the hero elements carry no scroll-linked transform at all.

The video lives at [assets/video/hero-bg.mp4](assets/video/hero-bg.mp4) (5.7 MB), copied in from
`C:\Users\OMEN\Downloads\mixkit-clouds-and-blue-sky-background-2408-hd-ready.mp4`.

The hero has **no poster image and no decorative overlays.** The previous still, the travel-collage figure
and every transparent PNG/WebP cut-out (luggage, route pins, jet, stethoscope, trip-card artwork) were
removed along with their CSS and their source files. Until the first frame decodes, `.hero-media` shows the
page's dark plate; the video only fades in once it is genuinely playing.

## Accessibility &amp; robustness

- Semantic headings with a real `<h1>` on the hero
- `aria` states on tabs, filters and the disclosure widgets; labels on all form fields
- Full `prefers-reduced-motion` support
- **JS-off / GSAP-CDNs-down safety:** content is only hidden once `html.js` is set, an intro fail-safe
  keyframe removes the curtain after 6s, and if GSAP fails to load the page reveals itself and stays
  scrollable (verified by simulating a missing GSAP at runtime)

## Notes for the next pass

- **Image weight:** the rewards section uses `travel-rewards-card.jpeg` (221 KB, lazy-loaded) instead of
  the 1.5 MB `day.webp`; the same image is reused by the trip marquee. `young-woman.webp` still backs
  the contact form. `day.webp`, `medium-shot.webp`,
  `life-golden-age.webp` and `senior-man.webp` are kept in `assets/img/` unused — run them through an
  image pipeline (resize + quality ~75) before wiring them in.
- **The contact form has no endpoint.** It validates and reports success client-side only. The original
  site posts to `/php/recaptcha-v3.php` with reCAPTCHA v3; wire that (or your own handler) before launch.
- No analytics, phone/WhatsApp CTA or `robots.txt`/`sitemap.xml`/JSON-LD yet — see the audit findings
  for the full list.
