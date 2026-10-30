# Varshini Kalikaya — Portfolio Website

> Modern portfolio website for **Kalikaya Varshini** — Aspiring Full-Stack & Python Developer.

🌐 **Live Website**: [https://varshinikalikaya.com](https://varshinikalikaya.com)  
*(GitHub Pages fallback: [https://varshini-kalikaya.github.io/varshini_portfolio/](https://varshini-kalikaya.github.io/varshini_portfolio/))*

---

## 🚀 Features

- **Responsive Design**: Smooth, editorial portfolio layout built with React & Tailwind CSS.
- **Interactive Animations**: Smooth scroll powered by Lenis, micro-interactions with Framer Motion.
- **Projects & Highlights**: Showcasing full-stack apps (CloudPulse, API Sentinel, ClauseGuard, PlasticLoop, ExpenseFlow, Multi-Agent Orchestrator).
- **Creative Showcase**: Sticker design gallery and creative experiments.
- **Theme Support**: Seamless light/dark mode with custom color palettes.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router, Tailwind CSS
- **Animation**: Framer Motion, Lenis Smooth Scroll
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Hosting**: GitHub Pages with custom domain `varshinikalikaya.com`

---

## 💻 Local Development

1. Clone repository:
   ```bash
   git clone https://github.com/Varshini-Kalikaya/varshini_portfolio.git
   cd varshini_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run locally:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Custom Domain Setup (`varshinikalikaya.com`)

To link your purchased domain `varshinikalikaya.com` with this repository on GitHub Pages:

1. **DNS Settings** (at your domain registrar: GoDaddy, Namecheap, Cloudflare, Hostinger, etc.):
   - Add four **A Records** pointing `@` to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a **CNAME Record**:
     - Host: `www`
     - Value: `varshini-kalikaya.github.io`

2. **GitHub Pages Configuration**:
   - Go to your repository: [Varshini-Kalikaya/varshini_portfolio](https://github.com/Varshini-Kalikaya/varshini_portfolio)
   - Click **Settings** > **Pages**
   - Under **Build and deployment > Source**, select **Deploy from a branch**
   - Branch: `main` / Folder: `/(root)`
   - Under **Custom domain**, verify `varshinikalikaya.com` is entered and check **Enforce HTTPS**.

---

© 2026 Varshini Kalikaya. All rights reserved.
