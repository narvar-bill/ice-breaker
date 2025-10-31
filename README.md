# Icebreaker — Deploy instructions

This repository is a small static site built from `index.html`, `app.js`, and `style.css`.

What I added
- `.github/workflows/deploy.yml` — GitHub Actions workflow that publishes the repository root to the `gh-pages` branch whenever `main` receives a push.

How deployment works

1. Commit and push your changes to the `main` branch.
2. GitHub Actions will run the `Deploy static site to GitHub Pages` workflow and publish the repository root to the `gh-pages` branch.
3. GitHub Pages will serve the site from the `gh-pages` branch. If necessary, go to your repository Settings → Pages and confirm `gh-pages` is selected as the source (it may be auto-configured).

Quick local test

Open `index.html` in your browser (double-click or use a local static server):

```bash
# from repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

How to push the changes (example)

```bash
git add .
git commit -m "Add GH Pages deploy workflow and README"
git push origin main
```

Notes & alternatives
- If you'd prefer Netlify or Vercel, they both support one-click deployments on the repository and automatically detect static sites. Netlify can also use a GitHub Action or its native integration to publish on push.
- The workflow publishes the repository root; if you later add a build step (e.g., a bundler), update `publish_dir` in `.github/workflows/deploy.yml` to point to the build output (for example `dist/`).

If you'd like, I can also add a Netlify/TOML or a Vercel configuration and/or a tiny CI test to validate that `index.html` is present before publish.
