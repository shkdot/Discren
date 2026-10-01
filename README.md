# DISCREN — B2B Apparel Printing Website

A modern, production-quality multi-page website built for **DISCREN**, a B2B apparel printing business based in Jogeshwari West, Mumbai.

---

## 🚀 How to Host & Run Locally

### Option A: One-Click Launch (Windows)

Simply double-click either of the batch files in the project directory:

- **`start-dev.bat`**: Launches the local development server at **`http://localhost:5173`**.
- **`start-production-preview.bat`**: Compiles the optimized production build and hosts it locally at **`http://localhost:4173`**.

---

### Option B: Using Terminal Commands

1. **Install Dependencies** (if needed):
   ```bash
   npm install
   ```

2. **Start Development Server** (Hot Reload):
   ```bash
   npm run dev
   ```
   *Opens server at `http://localhost:5173` (also accessible across your local network).*

3. **Build & Host Production Bundle Locally**:
   ```bash
   npm run build
   npm run preview
   ```
   *Serves compiled static files at `http://localhost:4173`.*

---

## 📁 Environment Configuration

An `.env` configuration file is set up in the root folder:

```env
VITE_APP_NAME=DISCREN
VITE_APP_TAGLINE=B2B Apparel Printing & Production Partner
VITE_APP_LOCATION=Jogeshwari West, Mumbai
VITE_PORT=5173
VITE_PREVIEW_PORT=4173
```

---

## 🌐 Deploying to Production Web Hosting

When you are ready to publish the website live to the internet:

1. **Vercel / Netlify**: Connect your GitHub repository or drag-and-drop the `dist/` folder after running `npm run build`. Set build command to `npm run build` and publish directory to `dist`.
2. **Nginx / Apache / IIS**: Run `npm run build` and upload the contents of the `dist/` folder to your web server root.

---

## 📄 Included Routes

- `/` — Home Page
- `/about` — About DISCREN
- `/capabilities` — Printing Capabilities
- `/work` — Our Work & Lightbox Showcase
- `/process` — Production Process Timeline
- `/faq` — FAQ with Keyword Search
- `/contact` — Request a Quote & Contact Us
- `/privacy` — Privacy Policy
