# Cengiz Ekmekçi — Portfolio (React + TypeScript + Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Deploy to Vercel

1) Push your code to GitHub (or connect an existing repo).

2) On Vercel:
- Click “New Project” → Import your GitHub repo
- Framework Preset: Vite (auto-detected)
- Build Command: `vite build`
- Output Directory: `dist`
- Root Directory: repository root (leave empty)
- Environment Variables: none required

3) SPA Routing
- `vercel.json` is included and rewrites all routes to `/` for React Router.

4) Optional CLI deploy
```bash
# if needed
# npm i -g vercel
vercel --prod
```

5) Dark Mode and SEO
- Dark mode is persisted via `localStorage` and initialized early in `index.html`.
- Basic SEO/OG tags are set in `index.html`. Update title/description as needed.

Troubleshooting
- If build fails locally, ensure Node 18+ and run:
```bash
# using npm
npm install
npm run build
# or using bun
bun install
bun run build
```
- Vercel automatically uses `npm ci` or your preferred package manager if configured.

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
