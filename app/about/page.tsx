import { getMarkdownContent } from '@/lib/markdown';
import MarkdownRenderer from '@/components/MarkdownRenderer';

/**
 * About Page
 * Displays content from /content/about.md
 * Uses MarkdownRenderer for rich content display
 */

export default async function About() {
  let aboutContent;

  try {
    // Attempt to load about.md from content directory
    aboutContent = await getMarkdownContent('about.md');
  } catch (error) {
    // Fallback if about.md doesn't exist
    aboutContent = null;
  }

  return (
    <div className="container-brutalist">
      <div className="max-w-4xl mx-auto">
        {aboutContent ? (
          <>
            <h1 className="mb-8">{aboutContent.title}</h1>
            <div className="card">
              <MarkdownRenderer content={aboutContent.content} />
            </div>
          </>
        ) : (
          <>
            <h1 className="mb-8">About</h1>
            <div className="card">
              <p className="mb-6">
                This is Portfolio OS — a modular system for showcasing creative-tech work,
                writing, and ideas.
              </p>
              <p className="mb-6">
                Built with Next.js 14 App Router, TypeScript, and TailwindCSS. Designed
                with brutalist minimalism in mind: bold, functional, and unapologetically
                direct.
              </p>
              <p>
                To customize this page, edit <code>/content/about.md</code>.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
