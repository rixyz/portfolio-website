# Portfolio Website

Portfolio Template built with React. Edit one config file, write your CV in LaTeX (or drop in a PDF), push — and it deploys.

## 📃 Sections

  - User
  - Education
  - Experience
  - Award
  - Social
  - Contact
  - Skill
  - Volunteering
  - Work (Fetched from Github + Other)

## 🚀 Get started

Use this repo as the starting point for your own site:

1. On GitHub, click **Use this template → Create a new repository** (or **Fork**).
2. Clone *your* new repo and install dependencies ([bun](https://bun.sh) required):

```bash
$ git clone https://github.com/<your-username>/<your-repo>
$ cd <your-repo>
$ bun install
```

3. Start the dev server at <http://localhost:5173>:

```bash
$ bun run dev
```

> Just want to try it locally first? Clone this repo directly: `git clone https://github.com/rixyz/portfolio-website`.

Other scripts: `bun run build` (production build → `dist/`), `bun run preview`, `bun run lint`.

## ✏️ What to edit

1. **`src/config.ts`** — all your content: name, title, socials, contact, skills, experience, education, awards, volunteering and extra projects. See **[`src/config.ts.example`](src/config.ts.example)** for a fully-commented reference of every field.
   - Set `user.github` to your GitHub username — the **Projects** section auto-fetches your public repos.
   - Use `projectFilter` to control the Projects list — `limit` (max shown), `ignore` (hide repos), or `only` (whitelist: show only these).
   - In experience, `duration` is optional; set `end: "Present"` to highlight your current role.
2. **`CV.tex`** — your résumé (compiled to a PDF automatically. Prefer a ready-made PDF? Skip LaTeX and drop your own `public/CV.pdf` instead.
3. **`index.html`** *(optional)* — the page `<title>` and the social / Open-Graph meta tags (name, description, preview image).

## 📄 CV

The CV lives in `CV.tex`. On every push that changes it, a GitHub Action compiles it to `public/CV.pdf`, which the **View CV** button serves at `/CV.pdf` — no local LaTeX needed.

- Edit `CV.tex`, then commit and push.
- For the first build (or on demand), push a change to `CV.tex` or run the **Build CV** workflow from the **Actions** tab.
- Requires Actions write permission: **Settings → Actions → General → Workflow permissions → "Read and write"**.
- Prefer a ready-made PDF? Drop your own `public/CV.pdf`, then delete `CV.tex` and `.github/workflows/build-cv.yml` so the action doesn't overwrite it.

## 🔁 Push & update

Everything is just files — edit, commit, push:

```bash
$ git add -A
$ git commit -m "Update content"
$ git push
```

- Pushing a change to **`CV.tex`** triggers the **Build CV** action, which regenerates `public/CV.pdf`.

## 🔄 Update from the template

Repos made with **Use this template** have independent history (so there's no "Sync fork" button). Add this repo as a remote — once:

```bash
$ git remote add template https://github.com/rixyz/portfolio-website
```

Then pull in template updates anytime:

```bash
$ git fetch template
$ git merge template/master --allow-unrelated-histories   # flag only needed the first time
```

Your own content (`src/config.ts`, `CV.tex`, `index.html`) will conflict with the template's placeholders — that's expected. Keep your versions and take the template's updates for everything else:

```bash
$ git checkout --ours src/config.ts CV.tex index.html
$ git add src/config.ts CV.tex index.html
$ git commit          # completes the merge
$ git push
```

After the first merge the histories are linked, so future updates are just `git fetch template && git merge template/master`.

