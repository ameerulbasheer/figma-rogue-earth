# Rogue Earth — Character Sheet

A digital character sheet for the **Rogue Earth** tabletop RPG, built as a web app. Tracks all character stats, resources, inventory, and notes in one place, with a built-in rules reference so you don't need to flip through the book mid-session.

## Features

- **Character Sheet** — track Virtue, Torment, Hope, Courage, Resolve, Necessity, and Experience
- **Inventory & Notes** — freeform panels for gear and session notes
- **Rules Reference** — in-app reference for Basic, Growth, Rest, Intermission, and Sync moves, plus Virtue & Torment rules
- **Auto-save** — all data is saved automatically to your browser's local storage; your sheet persists between sessions

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

This app requires Supabase environment variables for authentication and sheet persistence.
Create a `.env` file at the project root with:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

This file is ignored by Git.

This app is a static site — any static host works. For Vercel:

1. Push the repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — just click **Deploy**

Build command: `npm run build` | Output directory: `dist`
