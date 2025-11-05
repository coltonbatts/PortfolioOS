import { getAllContent } from '@/lib/markdown';
import MarkdownRenderer from '@/components/MarkdownRenderer';

/**
 * Work Page
 * Displays all work projects from /content/work
 * Each project is rendered as a card with frontmatter metadata
 */

export default async function Work() {
  const workItems = await getAllContent('work');

  return (
    <div className="container-brutalist">
      <div className="mb-16">
        <h1 className="mb-6">Work</h1>
        <p className="text-xl md:text-2xl max-w-3xl">
          A collection of projects, experiments, and creative-tech explorations.
        </p>
      </div>

      {workItems.length > 0 ? (
        <div className="space-y-12">
          {workItems.map((item) => (
            <article key={item.slug} className="card">
              <div className="mb-6">
                <h2 className="mb-4">{item.title}</h2>

                <div className="flex flex-wrap items-center gap-4 text-sm opacity-70">
                  {item.date && (
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border-2 border-black rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {item.excerpt && (
                <p className="text-xl mb-6">{item.excerpt}</p>
              )}

              <MarkdownRenderer content={item.content} />
            </article>
          ))}
        </div>
      ) : (
        <div className="card">
          <p className="text-center opacity-70">
            No work items yet. Add markdown files to /content/work to showcase your projects.
          </p>
        </div>
      )}
    </div>
  );
}
