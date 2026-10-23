# Liafil Elmido — Warm Beige Portfolio (v3 Mobile Fix)

This is a working, responsive single-page website built from the warm beige/brown visual reference you selected.

## Open it

1. Extract the ZIP.
2. Open `index.html` in Chrome, Safari, Firefox or Edge. No installation or build tools are needed.
3. To publish, upload all extracted contents (including `assets`, `styles.css`, `refinements.css`, `script.js`, and `.nojekyll`) to your static hosting provider. Keep filenames and folder paths intact.

## Update an existing GitHub Pages site

1. Extract this ZIP.
2. Replace the files in the folder your repository uses for GitHub Pages (the repository root or `docs`, depending on its current setting). Put `index.html` directly in that folder; do not add an extra enclosing folder.
3. Commit the changes and wait for the GitHub Pages deployment to finish.
4. Reload the site on your phone. The CSS and JavaScript URLs include `?v=3` to request the updated files.

## Mobile layout changes

- Navigation switches to a scrollable dropdown at 1100px and below, with touch-friendly buttons. The menu closes after choosing a section, pressing Escape, clicking outside, or crossing that breakpoint.
- At 760px and below, the hero copy, portrait, About section, services, and background sections stack in document order. The introductory speech bubble has its own column beside the portrait.
- Service cards use two columns on phones and one column at 360px and below.
- The seated photo stays in the normal flow beneath the skill labels, so longer text does not run underneath it.
- Text wraps and images stay inside their containers. The original desktop composition is retained above 1100px.

Validation: local asset links, section anchors, JavaScript syntax and menu behavior, stylesheet structure, unchanged content/assets, and ZIP integrity were checked. Live browser/device verification could not run because the preview service was unavailable. Check the deployed page on your phone after upload.

## Photos used

- `assets/liafil-standing.png` — central full-body hero, hands in pockets
- `assets/liafil-pointing.png` — points to service cards
- `assets/liafil-seated-macbook.png` — sitting in chair with an Apple-logo MacBook
- `assets/liafil-headshot.png` — no longer used on the page (safe to delete)

The first three portraits are AI-generated approximations from supplied face photos. They may not be a perfect likeness. The visual display uses PNG files with transparent backgrounds. No video generation / 3D rig is used.

## Contents

The four positions, descriptions, and dates come from your attached resume. Contact links include the phone number and email from that resume. The public website displays General Mariano Alvarez, Cavite instead of your exact barangay address for privacy. The original PDF download retains its original details; review it before publication.

Service cards were restricted to work supported by your resume: chat/email/phone customer support, refund/billing, and account/product support. The screenshot has tool logos that your resume did not substantiate, so this site uses **Support Expertise** labels instead of claiming specific software experience. Skills are shown as plain labels (the old decorative percentage bars were removed).

## Edit text, links, and photos

- Open `index.html` in any editor and change descriptions/contact details.
- Replace an image in `assets/` using the same filename to swap it without editing HTML.
- Colors and layouts can be changed in `styles.css` at the top `:root` variables.
- `refinements.css` loads after `styles.css` and holds readability fixes, SVG icon styles, desktop scaling, and the final v3 mobile/tablet layout rules. Keep both CSS files uploaded. The v3 rules at the end take precedence over the older mobile adjustments.
- Service card speech bubbles and mobile menu logic are in `script.js`.

## Accessibility and interaction

- Keyboard-friendly menu and service cards
- Responsive at 320px and above
- No automatic floating/walking animations
- Reduced motion support
- Functional anchor navigation, résumé download, mail and phone links

Note: the contact action opens the user's email app; this does not require a backend server.
