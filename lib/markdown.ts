import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the content directory path
const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Markdown utility for Portfolio OS
 * Handles parsing markdown files with frontmatter using gray-matter
 * and converting to HTML with remark
 */

export interface MarkdownContent {
  slug: string;
  title: string;
  date?: string;
  tags?: string[];
  excerpt?: string;
  content: string;
  [key: string]: any; // Allow additional frontmatter fields
}

/**
 * Get all markdown files from a specific directory
 * @param dir - Subdirectory within /content (e.g., 'work', 'vault')
 */
export function getMarkdownFiles(dir: string = ''): string[] {
  const targetDir = dir ? path.join(contentDirectory, dir) : contentDirectory;

  if (!fs.existsSync(targetDir)) {
    return [];
  }

  const files = fs.readdirSync(targetDir);
  return files.filter(file => file.endsWith('.md'));
}

/**
 * Parse a single markdown file and return metadata + HTML content
 * @param filePath - Relative path from /content directory
 */
export async function getMarkdownContent(filePath: string): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse frontmatter with gray-matter
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML with remark
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();

  // Extract slug from filename
  const slug = path.basename(filePath, '.md');

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || null,
    tags: data.tags || [],
    excerpt: data.excerpt || '',
    content: contentHtml,
    ...data, // Include all other frontmatter fields
  };
}

/**
 * Get all content items from a subdirectory (e.g., all work projects)
 * @param dir - Subdirectory within /content
 */
export async function getAllContent(dir: string): Promise<MarkdownContent[]> {
  const files = getMarkdownFiles(dir);

  const allContent = await Promise.all(
    files.map(async (file) => {
      const filePath = dir ? `${dir}/${file}` : file;
      return await getMarkdownContent(filePath);
    })
  );

  // Sort by date (newest first)
  return allContent.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
