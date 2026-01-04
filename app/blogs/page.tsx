import Link from 'next/link';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { blogPostsConfig, BlogPostConfig } from './blogPostsConfig';
import { parseFrontmatter } from '@/utils/parseFrontmatter';

interface BlogPost extends BlogPostConfig {
  description: string;
}

// Number of words to extract for preview
const PREVIEW_WORD_COUNT = 28;

// Helper function to extract first x words from MDX content
function extractPreviewText(content: string, wordCount: number): string {
  // Find the first h1 header and start reading after it
  const h1Match = content.match(/^#\s+.+$/m);
  let contentAfterH1 = content;

  if (h1Match) {
    // Get everything after the h1 header (including the newline after it)
    const h1Index = content.indexOf(h1Match[0]);
    contentAfterH1 = content.slice(h1Index + h1Match[0].length);
  }

  // Find and skip "## The Challenge" header
  const challengeMatch = contentAfterH1.match(/^##\s+The Challenge\s*$/m);
  if (challengeMatch) {
    const challengeIndex = contentAfterH1.indexOf(challengeMatch[0]);
    contentAfterH1 = contentAfterH1.slice(
      challengeIndex + challengeMatch[0].length
    );
  }

  // Remove markdown headers, code blocks, HTML tags, and other markdown syntax
  const text = contentAfterH1
    .replace(/^#+\s+/gm, '') // Remove remaining markdown headers
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to just text
    .replace(/\*\*([^\*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^\*]+)\*/g, '$1') // Remove italic
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  // Split into words and take first x words
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const preview = words.slice(0, wordCount).join(' ');

  return preview + (words.length > wordCount ? '...' : '');
}

async function BlogsPage() {
  // Read MDX files and extract preview text
  const blogPosts: BlogPost[] = await Promise.all(
    blogPostsConfig.map(async post => {
      const mdxPath = join(process.cwd(), 'content', `${post.id}.mdx`);
      let description = '';

      try {
        const fileContent = await readFile(mdxPath, 'utf-8');
        const { content } = parseFrontmatter(fileContent);
        description = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        `;
        if (post.published) {
          description = extractPreviewText(content, PREVIEW_WORD_COUNT);
        }
      } catch (error) {
        console.error(`Error reading ${post.id}.mdx:`, error);
        description = 'Read the full post to learn more...';
      }

      return {
        ...post,
        description,
      };
    })
  );
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 pt-24 pb-16">
      <h1 className="text-4xl font-bold text-primary mb-5">
        Development Challenges and Solutions
      </h1>
      <p className="text-gray-600 mb-8">
        Technical deep-dives and problem-solving approaches from my projects
      </p>
      <div className="@container grid gap-6 md:grid-cols-2 @lg:grid-cols-3">
        {blogPosts.map(post => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className={`group grid grid-rows-[200px_auto_1fr_auto] max-w-[380px] p-6 rounded-lg border-2 transition-all duration-200 ${
              post.published
                ? 'border-primary bg-secondary shadow-sm-primary hover:shadow-md-primary cursor-pointer'
                : 'border-gray-600 bg-gray-100 opacity-60 shadow-sm-primary cursor-not-allowed pointer-events-none'
            }`}
          >
            <div className="flex justify-center items-center overflow-hidden">
              {post.preview ? (
                <div
                  className={`scale-[0.8] origin-center ${
                    !post.published ? 'opacity-70' : ''
                  }`}
                >
                  {post.preview}
                </div>
              ) : null}
            </div>
            <h2
              className={`text-xl font-semibold mb-2 transition-colors ${
                post.published
                  ? 'text-primary group-hover:text-primary-hover'
                  : 'text-gray-500'
              }`}
            >
              {post.title}
            </h2>
            <p
              className={`text-sm ${
                post.published ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              {post.description}
            </p>
            <span
              className={`inline-block mt-4 font-medium text-sm ${
                post.published
                  ? 'text-primary group-hover:underline'
                  : 'text-gray-400'
              }`}
            >
              {post.published ? 'Read more →' : 'Coming soon...'}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
