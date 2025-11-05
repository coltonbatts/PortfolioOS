---
title: Example Project — Portfolio OS
date: 2025-01-15
tags: [nextjs, typescript, design-system]
excerpt: A showcase of the Portfolio OS architecture and design principles
---

## Project Overview

This is an **example project** demonstrating how work items are displayed in Portfolio OS. Each project lives as a markdown file in `/content/work` and is automatically parsed and rendered.

## Key Features

### Markdown-First Content

All content is written in markdown, making it easy to:

- Version control your work history
- Write in a familiar, simple format
- Export and reuse content anywhere

### Frontmatter Support

Every project includes frontmatter metadata:

```yaml
---
title: Example Project
date: 2025-01-15
tags: [nextjs, typescript, design-system]
excerpt: A short description for preview cards
---
```

### Automatic Rendering

The Portfolio OS system automatically:

1. Reads all `.md` files from `/content/work`
2. Parses frontmatter with gray-matter
3. Converts markdown to HTML with remark
4. Displays content in a responsive grid

## Technical Implementation

Built with:

- **Next.js 14 App Router** for server-side rendering
- **TypeScript** for type safety
- **TailwindCSS** for brutalist styling
- **remark + rehype** for markdown processing

## Design Approach

The brutalist design system features:

- **Monochrome palette**: Black, white, and light gray
- **Bold typography**: Inter and Helvetica
- **2xl border radius**: Soft corners on cards
- **Generous spacing**: Breathing room for content

---

## Next Steps

To create your own project page:

1. Create a new `.md` file in `/content/work`
2. Add frontmatter with title, date, tags, and excerpt
3. Write your project description in markdown
4. Save and reload — it will appear automatically

---

*This is an example work item. Replace it with your own projects.*
