import Link from 'next/link';
import Image from 'next/image';
import { readFile } from 'fs/promises';
import { join } from 'path';
import CollisionDetectionDemoStatic from '@/components/CollisionDetectionDemoStatic';
import OptimalLayoutWithCircles from '@/components/OptimalLayout/OptimalLayoutWithCircles';
import ContextPreview from '@/components/ContextPreview';
import LoadingSequenceDiagram from '@/components/LoadingSequenceDiagram';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  preview?: React.ReactNode;
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

const blogPostsConfig: Omit<BlogPost, 'description'>[] = [
  {
    id: 'calculate-optimal-dimensions',
    title:
      'Calculating the Optimal Distribution of Items to Maximize Available Space',
    preview: (
      <OptimalLayoutWithCircles numItems={100} width={300} height={220} />
    ),
  },
  {
    id: 'collision-detection',
    title: 'Creating my own Collision Detection Algorithm',
    preview: <CollisionDetectionDemoStatic />,
  },
  {
    id: 'untangling-contexts',
    title: 'Untangling Multiple Layers of React Context',
    preview: <ContextPreview />,
  },
  {
    id: 'number-of-colors-for-division',
    title: 'An Algorithm for Colors Needed to Avoid Matching Adjacent Groups',
    preview: (
      <Image
        src="/fraction-division.png"
        alt="fraction division model showing 3 and 3 fifths divided into groups of 2/5 where each group is shown in a different color."
        width={400}
        height={300}
      />
    ),
  },
  {
    id: 'loading-sequence',
    title: 'Loading necessary dependencies for embeddable widget',
    preview: <LoadingSequenceDiagram />,
  },
  {
    id: 'ux-piece-placements',
    title: 'UX for handling out of bounds piece placements',
    preview: (
      <Image
        alt="math puzzle with one piece placed out of bounds"
        src="/out-of-bounds.png"
        width={300}
        height={200}
      />
    ),
  },
];

async function BlogsPage() {
  // Read MDX files and extract preview text
  const blogPosts = await Promise.all(
    blogPostsConfig.map(async post => {
      const mdxPath = join(process.cwd(), 'content', `${post.id}.mdx`);
      let description = '';

      try {
        const content = await readFile(mdxPath, 'utf-8');
        description = extractPreviewText(content, PREVIEW_WORD_COUNT);
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
    <div className="max-w-4xl mx-auto px-4 py-8 pt-24 pb-16">
      <h1 className="text-4xl font-bold text-[#292D3E] mb-5">
        Development Challenges and Solutions
      </h1>
      <p className="text-gray-600 mb-8">
        Technical deep-dives and problem-solving approaches from my projects
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map(post => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="group grid grid-rows-[200px_auto_1fr_auto] p-6 rounded-lg border-2 border-[#292D3E] hover:shadow-2xl transition-all duration-200 bg-[#c5faf7]"
          >
            <div className="flex justify-center items-center overflow-hidden">
              {post.preview ? (
                <div className="scale-[0.8] origin-center">{post.preview}</div>
              ) : null}
            </div>
            <h2 className="text-xl font-semibold text-[#292D3E] mb-2 group-hover:text-[#1a1a5a] transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm">{post.description}</p>
            <span className="inline-block mt-4 text-[#292D3E] font-medium text-sm group-hover:underline">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
