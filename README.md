# Learning with Covariance Matrices: LoG 2026 tutorial website

A static one-page site (plain HTML, CSS and JavaScript, with no build step) built to be hosted on GitHub Pages.

## Preview locally

From this folder:

```
python -m http.server 8000
```

Then open http://localhost:8000. You can also just double-click `index.html`.

## Where things are

| What | File |
|---|---|
| All page content (Home, Speakers, Schedule, Materials) | `index.html` |
| Colors, fonts, layout | `assets/css/style.css` (theme variables at the top) |
| Mobile menu and active-link highlight | `assets/js/main.js` |
| Speaker photos | `assets/img/speakers/` |
| Slides PDF and other downloads | `assets/files/` |

## Filling in placeholders

Every piece of placeholder text has `class="placeholder"`, which renders it in grey italics, and every placeholder link points to `href="#"`.
To find what's left, search `index.html` for `placeholder` or `href="#"`.
When you replace a placeholder, also remove `class="placeholder"`.

**Speaker photos:** these are in `assets/img/speakers/`. To change one, overwrite the file, or point the `<img class="avatar">` tag at a new file. Photos are cropped to a circle, slightly above center, so a head-and-shoulders shot of about 400–500 px works best.

**Papers and repositories:** these are in the Additional Material section of `index.html`. Each paper is an `<li>` inside an `<ol class="biblio">`, and its links are the `<a>` tags inside `<span class="tags">`.

**Slides:** put the PDF in `assets/files/` and link to it as `assets/files/<file>.pdf`. GitHub rejects files larger than 100 MB.

## Deploying

The site will be served from GitHub Pages. The `.nojekyll` file tells GitHub to serve the files as they are, without processing them.
