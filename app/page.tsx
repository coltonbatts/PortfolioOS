import Link from 'next/link';
import { getAllContent } from '@/lib/markdown';

/**
 * Home Page
 * Landing page that dynamically lists Work items from /content/work
 * Features hero section and grid-based work showcase
 */

export default async function Home() {
  // Fetch all work items from markdown files
  const workItems = await getAllContent('work');

  return (
    <div className="container-brutalist">
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <h1 className="mb-6">
          Motion designer and creative director
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl">
          I craft brand identities and visual narratives through motion design, typography, and animation. Working at the intersection of design and storytelling—no corporate speak, just honest work that moves.
        </p>
      </section>

      {/* Featured Work Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2>Featured Work</h2>
          <Link
            href="/work"
            className="text-lg font-semibold no-underline hover:underline"
          >
            View All →
          </Link>
        </div>

        {workItems.length > 0 ? (
          <div className="grid-brutalist">
            {workItems.map((item) => (
              <article key={item.slug} className="card">
                <h3 className="mb-4">{item.title}</h3>

                {item.date && (
                  <time className="block text-sm mb-4 opacity-70" dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}

                {item.excerpt && (
                  <p className="mb-6">{item.excerpt}</p>
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm border-2 border-black rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="card">
            <p className="text-center opacity-70">
              No work items yet. Add markdown files to /content/work to get started.
            </p>
          </div>
        )}
      </section>

      {/* [AI_INTEGRATION_POINT] Future Echo API integration will go here */}
      {/* This section will display AI-powered insights and recommendations */}
    </div>
  );
}
