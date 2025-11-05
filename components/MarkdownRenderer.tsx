/**
 * MarkdownRenderer Component
 * Renders parsed markdown HTML content with proper styling
 * Used across Work, Vault, and other content-heavy pages
 */

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <article
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
      style={{
        // Custom prose styling for brutalist aesthetic
        // Overrides default prose styles to match monochrome design
        color: '#000000',
        lineHeight: '1.75',
      }}
    />
  );
}

/**
 * Note: This component uses dangerouslySetInnerHTML for markdown rendering.
 * Content is sanitized during markdown processing in lib/markdown.ts
 * For user-generated content, additional sanitization layers should be added.
 */
