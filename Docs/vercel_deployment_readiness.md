# 🍣 Vercel Deployment Readiness Assessment
**Project**: SUSHI CHOICE Brand Platform v2.0
**Date**: June 18, 2026

We have conducted a comprehensive audit of the project repository to evaluate its readiness for deployment on the **Vercel** cloud hosting platform.

---

## 📊 1. Current Build Status

A test build was executed locally to ensure the compilation and bundling pipelines are fully operational.

- **Build Tool**: Vite 8.x
- **Build Command**: `npm run build`
- **Build Duration**: 10.27 seconds (Successful)
- **Output Directory**: `dist/`
- **Output Assets**: 
  - `dist/index.html` (2.67 kB)
  - `dist/assets/index-[hash].css` (56.61 kB)
  - `dist/assets/index-[hash].js` (136.59 kB)
  - Over 50 static media assets (WebP, JPG, PNG, and MP4 videos) successfully optimized and copied.
  - Critical SEO configurations (`sitemap.xml`, `robots.txt`, and `favicon.svg`) copied to the root output.

> [!TIP]
> The build output size and caching structure are highly optimal. Media assets like `hero-video.mp4` and `rotary-video.mp4` have been successfully bundled and will be cached at Vercel's global edge network.

---

## 🛠️ 2. Critical Deployment Considerations & Completed Fixes

### 🔑 A. SPA Client-Side Routing (Resolved)
The application implements a **Custom History-based Router** (`src/utils/router.js`) using the HTML5 History API. 
* **The Problem**: When a user goes directly to `https://your-domain.com/brand` or refreshes the page on `/menu`, Vercel's CDN will try to locate a static directory or file named `/brand` or `/brand.html`. Since Vite generates a Single Page Application with only `index.html` at the root, the user will experience a **404 Not Found** error.
* **The Solution**: We created a `vercel.json` file in the project root containing a rewrite rule to redirect all traffic back to `index.html`, letting the client-side router handle the rendering.

### 🔍 B. Static Metadata & JSON-LD Image Path Fixes (Resolved)
During the audit, we identified and resolved two issues regarding hardcoded `/src/...` asset paths that would have resulted in 404 errors in production:
1. **Twitter Card Image Tag**: 
   * *Issue*: In `index.html`, Twitter meta tags used `property="twitter:..."` which caused Vite's HTML compiler to skip parsing them. Thus, `/src/assets/images/brand/logo.png` remained uncompiled and would fail in production.
   * *Fix*: Changed all Twitter meta tags in `index.html` to use `name="twitter:..."` (the standard specification). Vite now successfully parses and rewrites `twitter:image` to the bundled path `/assets/logo-[hash].png`.
2. **JSON-LD Schema Dynamic Paths**: 
   * *Issue*: In `src/utils/seo.js`, dynamic schema configurations for `Restaurant` and `Organization` types contained hardcoded absolute paths like `https://sushichoice.co.kr/src/assets/images/...`. These do not exist in production since Vite changes directory structures and asset names during bundling.
   * *Fix*: Refactored `src/utils/seo.js` to import the image assets (logo and store exterior images) using ES module imports, then dynamically injected their resolved URLs into the schemas. Vite now correctly bundles and updates these paths in the JSON-LD schemas.

### ⚙️ C. Vercel Project Build Settings
When importing this repository into Vercel, ensure the project configurations match the following values:

| Setting | Value | Source |
| :--- | :--- | :--- |
| **Framework Preset** | **Vite** | Automatically detected |
| **Build Command** | `npm run build` | `package.json` |
| **Output Directory** | `dist` | Default Vite output |
| **Install Command** | `npm install` | Default npm dependency installation |

### 🔒 D. Environment Variables
* The codebase currently uses `.env.example` to define environment variables for the Notion CLI Integration (`NOTION_API_TOKEN` and `NOTION_WORKSPACE_ID`).
* Since the production build is a static client-side bundle and there are no `import.meta.env` references in the front-end codebase, **no environment variables are required to be set in the Vercel dashboard** for the application to function correctly. 

---

## 🚀 3. Configuration Files Created

### `vercel.json` (Root Directory)
```json
{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration tells Vercel's Edge Network to serve `index.html` for any URL that doesn't match a static file in the `dist` directory, resolving any routing issues.
