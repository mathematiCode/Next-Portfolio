import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import OptimalSpaceExample from '@/components/OptimalLayout/OptimalSpaceExample';
import OptimalLayoutWithCircles from '@/components/OptimalLayout/OptimalLayoutWithCircles';
import { LikeButton } from '@/components/LikeButton/LikeButton';
import MDXCodeBlock from '@/components/MDXCodeBlock';
import CollisionDetectionDemo from '@/components/CollisionDetectionDemo';
import { ArrowBigRight } from 'lucide-react';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ challengeId: string }>;
}) {
  const { challengeId } = await params;
  const mdxPath = join(process.cwd(), 'content', `${challengeId}.mdx`);

  if (!existsSync(mdxPath)) {
    return <div>Blog post not found</div>;
  }

  const source = await readFile(mdxPath, 'utf-8');

  return (
    <div className="col-span-full text-start max-w-4xl mx-auto px-4 py-8">
      <MDXRemote
        source={source}
        components={{
          OptimalSpaceExample,
          OptimalLayoutWithCircles,
          code: MDXCodeBlock,
          CollisionDetectionDemo,
          ArrowBigRight,
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-[#292D3E] mt-8 mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-[#292D3E] mt-6 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold text-[#292D3E] mt-4 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2e365a] hover:underline"
            >
              {children}
            </a>
          ),
        }}
      />
      <LikeButton className="absolute top-8 right-8" />
    </div>
  );
}
