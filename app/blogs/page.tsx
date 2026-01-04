import Link from 'next/link';
import Image from 'next/image';
import { readFile } from 'fs/promises';
import { join } from 'path';
import CollisionDetectionDemoStatic from '@/components/CollisionDetectionDemoStatic';
import OptimalLayoutWithCircles from '@/components/OptimalLayout/OptimalLayoutWithCircles';
import {
  CombinatorialExplosionPreview,
  ContextPreview,
  TooManyParamsPreview,
} from '@/components/CodePreviews';
import LoadingSequenceDiagram from '@/components/LoadingSequenceDiagram';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  preview?: React.ReactNode;
  published: boolean;
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
    id: '2025-review',
    title: '2025 Year in Review',
    preview: (
      <Image
        src="/2025-review.png"
        alt="career progression diagram showing Math Game to an Apprenticeship to an Intership to a Job Offer"
        width={600}
        height={300}
      />
    ),
    published: true,
  },
  {
    id: 'calculate-optimal-dimensions',
    title:
      'Calculating the Optimal Distribution of Items to Maximize Available Space',
    preview: (
      <OptimalLayoutWithCircles numItems={106} width={300} height={220} />
    ),
    published: true,
  },
  {
    id: 'collision-detection',
    title: 'Creating my own Collision Detection Algorithm',
    preview: <CollisionDetectionDemoStatic />,
    published: false,
  },
  {
    id: 'untangling-contexts',
    title: 'Untangling Multiple Layers of React Context',
    preview: <ContextPreview />,
    published: false,
  },
  {
    id: 'number-of-colors-for-division',
    title: 'An Algorithm to Avoid Matching Adjacent Groups',
    preview: (
      <Image
        src="/fraction-division.png"
        alt="fraction division model showing 3 and 3 fifths divided into groups of 2/5 where each group is shown in a different color."
        width={400}
        height={300}
      />
    ),
    published: false,
  },
  {
    id: 'loading-sequence',
    title: 'Loading necessary dependencies for embeddable widget',
    preview: <LoadingSequenceDiagram />,
    published: false,
  },
  {
    id: 'location-ux',
    title: 'When friction is a good thing',
    preview: (
      <div className="relative w-full h-2/3 py-16 px-6 rounded-md text-2xl  bg-[#292D3E] text-white shadow-2xl ring-2 ring-orange-300">
        Do you want to save this as your default location?
        <div className="absolute flex right-4 bottom-4 gap-4">
          <span className="bg-white text-[#292D3E] px-3 rounded">Yes</span>
          <span className="bg-white text-[#292D3E] px-3 rounded">No</span>
        </div>
      </div>
    ),
    published: false,
  },
  {
    id: 'too-many-parameters',
    title: 'Refactoring Functions with Way too Many Parameters',
    preview: <TooManyParamsPreview />,
    published: false,
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
    published: false,
  },
  {
    id: 'combinatorial-explosion',
    title: 'Refactoring To Decouple Data and Avoid Combinatorial Explosion ',
    preview: <CombinatorialExplosionPreview />,
    published: false,
  },
  {
    id: 'testing-multi-user',
    title: 'Testing A Multi User Application',
    preview: (
      <div>
        <Image
          alt="Diagram showing 3 different users interacting with each other"
          src="/secret-santa.png"
          width={300}
          height={200}
          unoptimized
        />
      </div>
    ),
    published: false,
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
      <h1 className="text-4xl font-bold text-[#292D3E] mb-5">
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
                ? 'border-[#292D3E] bg-[#c5faf7] shadow-[2px_2px_#3e3e3e] hover:shadow-[5px_5px_#3e3e3e] cursor-pointer'
                : 'border-gray-600 bg-gray-100 opacity-60 shadow-[2px_2px_#3e3e3e] cursor-not-allowed pointer-events-none'
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
                  ? 'text-[#292D3E] group-hover:text-[#1a1a5a]'
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
                  ? 'text-[#292D3E] group-hover:underline'
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
