# Portfolio OS

A modular, markdown-based portfolio system for creative technologists. Built with Next.js 14, TypeScript, and TailwindCSS. Designed with brutalist minimalism.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Project Structure

```
portfolio-os/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with Navbar + Footer
│   ├── page.tsx           # Home page (lists work items)
│   ├── about/page.tsx     # About page
│   ├── work/page.tsx      # Work showcase
│   ├── vault/page.tsx     # Knowledge vault
│   └── echo/page.tsx      # AI interaction (placeholder)
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── MarkdownRenderer.tsx
├── content/               # Markdown content files
│   ├── about.md
│   └── work/
│       └── example-project.md
├── lib/                   # Utility functions
│   └── markdown.ts       # Markdown parsing with gray-matter + remark
├── styles/
│   └── globals.css       # Global styles + design system
├── public/               # Static assets
└── [config files]        # TypeScript, Tailwind, Next.js configs
```

## Design System

### Colors
- **Black**: `#000000` — Primary text and borders
- **White**: `#ffffff` — Backgrounds
- **Light Gray**: `#f5f5f5` — Card backgrounds

### Typography
- **Primary**: Inter (loaded via next/font)
- **Fallback**: Helvetica, Arial, sans-serif

### Layout Principles
- **Brutalist minimalism**: Bold, functional, direct
- **Grid-based**: Responsive 1/2/3 column layouts
- **Generous spacing**: 2xl border radius, large padding
- **Monochrome**: No colors beyond black/white/gray

## Content Management

### Adding Work Projects

1. Create a new markdown file in `/content/work/`
2. Add frontmatter:

```markdown
---
title: My Project
date: 2025-01-15
tags: [nextjs, design]
excerpt: A brief description for preview cards
---

Your project content here...
```

3. Save and reload — it will appear automatically on the home and work pages

### Editing About Page

Edit `/content/about.md` to customize your about page content.

### Future: Vault System

The `/vault` page is designed for a markdown-based knowledge base. Add files to `/content/vault/` and extend the system to display them.

## AI Integration Points

Portfolio OS includes placeholders for future AI integrations:

### Echo Page (`/echo`)
Interactive AI interface for conversations. Integration points:
- Create API route: `/app/api/echo/route.ts`
- Connect to Claude API or other AI services
- Implement streaming responses

### Home Page
AI-powered work recommendations and insights (see comment in `app/page.tsx`)

### Vault Page
MCP integration for intelligent content management:
- Semantic search
- Auto-tagging
- Content suggestions

Look for `// [AI_INTEGRATION_POINT]` comments in the codebase.

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first styling
- **gray-matter**: Frontmatter parsing
- **remark + rehype**: Markdown to HTML processing

## Architecture Decisions

### Why App Router?
- Server components by default for better performance
- Simplified data fetching with async components
- File-based routing with layouts

### Why Markdown?
- Version control friendly
- Easy to write and maintain
- Portable and future-proof
- Works with Git-based CMS options

### Why Brutalist Design?
- Focuses on content over decoration
- Fast loading, minimal CSS
- Timeless aesthetic
- Accessibility-first approach

## Customization

### Changing Colors
Edit `tailwind.config.js` theme colors:

```js
colors: {
  black: '#000000',
  white: '#ffffff',
  'light-gray': '#f5f5f5',
}
```

### Changing Typography
Update font import in `app/layout.tsx` and `tailwind.config.js`

### Adding New Pages
Create new folders in `/app` following Next.js App Router conventions

## Development

### File Watching
Next.js automatically reloads on file changes. Markdown content is read server-side, so refresh the page to see content updates.

### Type Safety
All components are typed with TypeScript. Markdown content types are defined in `lib/markdown.ts`.

### Styling
Use Tailwind utility classes. Custom utilities are defined in `styles/globals.css` under `@layer components`.

## Deployment

Build and deploy to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```

Or deploy with one click to Vercel via GitHub integration.

## Future Enhancements

- [ ] Dynamic routing for individual work items (`/work/[slug]`)
- [ ] Search and filter functionality
- [ ] Tag-based navigation
- [ ] RSS feed generation
- [ ] Dark mode toggle
- [ ] MCP integration for vault
- [ ] Claude API integration for Echo
- [ ] Image optimization and galleries
- [ ] Analytics integration

## License

MIT — Use freely for your own portfolio.

---

**Portfolio OS** — Built for builders.
