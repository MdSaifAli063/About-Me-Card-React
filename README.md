<h1 align="center">👨‍💻 About Me Card</h1>

<p align="center">
  A sleek, responsive <b>“About Me”</b> card component built with <b>React</b> and <b>Tailwind CSS</b>.<br>
  It showcases a developer profile, bio, tech stack, stats, social links, and a clear call-to-action: <b>“Join me!”</b> 🚀
</p>

<p align="center">
  <!-- Tech Badges -->
  <a href="https://reactjs.org/" target="_blank">
    <img alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-0F172A?logo=tailwindcss&logoColor=38BDF8" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" />
  </a>
  <a href="https://vercel.com/" target="_blank">
    <img alt="Deploy on Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=fff" />
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg" />
  </a>
</p>

---
## ✨ Preview  

🪄 The card includes:  
- 🌈 **Gradient banner** with ambient glow  
- 👤 **Avatar**, name, and concise “About Me” text  
- 💻 **Tech stack chips** with icons  
- 📊 **Highlights** — experience, projects, and remote-friendly badge  
- 🔗 **Social icons** (GitHub, LinkedIn, Email)  
- 🚀 **Primary CTA button:** “Join me!”  

Easily embed this component into your **portfolio** or **landing page**.

---
## ⚡ Features  

- 🎨 Modern, responsive UI with **Tailwind CSS**  
- 🌓 Dark-mode friendly  
- ♿ Accessible focus states & ARIA labels  
- 🪶 Lightweight — no extra UI libraries  
- 🧩 Easy customization for text, links, and colors  

---


## 🛠️ Getting Started  

### 🧩 Prerequisites  
- 🧠 **Node.js 16+**  
- 📦 **npm**, **yarn**, or **pnpm**  
- 🎨 **Tailwind CSS** configured  

### 📦 Tailwind Setup (if not yet installed)  
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
tailwind.config.js
```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```


## Usage

1. Add the Card component file to your project, e.g. src/components/Card.jsx (or .tsx).
2. Import and render it:
   import Card from '@/components/Card';
   export default function Home() {
     return (
       <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-6">
         <Card />
       </main>
     );
   }

## Customization

- Avatar: Replace the img src with your image URL or local asset.
- Text: Update title (“About Me”), bio, and highlights.
- Tech stack: Modify the stack array inside the component.
- Social links: Replace hrefs for GitHub, LinkedIn, and Email.
- CTA: Change the href target (e.g., /contact) and label (“Join me!”).
- Colors/Effects: Tweak Tailwind classes for gradients, shadows, rounded corners, and hover states.

## Example Props Variant (Optional)

You can make the component reusable by passing props:
- name, title, bio
- avatarUrl
- stack: string[]
- stats: { value: string; label: string }[]
- links: { github?: string; linkedin?: string; email?: string; cta?: { href: string; label: string } }

## Accessibility

- Social buttons include aria-labels.
- Focus-visible rings for keyboard users.
- Sufficient contrast in both light and dark themes (adjust if you change colors).

## Scripts

Common scripts in a React/Tailwind app:
- npm run dev — start development server
- npm run build — production build
- npm run preview — preview production build
- npm run lint — lint project (if configured)

## Folder Structure (suggested)

- src/components/Card.jsx — main component
- src/styles or src/index.css — Tailwind imports
- public/ — static assets (optional)
- README.md — this file

## Roadmap

- Add motion: smooth entrance animations (Framer Motion)
- Add theme toggle switch
- Add prop-based theming (light, dark, glass, solid)
- Export as npm package

## Contributing

Issues and PRs are welcome. Please:
- Create an issue describing the change
- Open a PR with a clear description and screenshots/gifs for UI changes

## License

MIT License. See LICENSE for details.

## Credits

- Icons: inline SVGs from Heroicons
- Badges: shields.io
- UI framework: Tailwind CSS
- React library: React
