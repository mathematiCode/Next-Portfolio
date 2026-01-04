import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import Link from 'next/link';
import Image from 'next/image';
import OptimalSpaceExample from '@/components/OptimalLayout/OptimalSpaceExample';
import OptimalLayoutWithCircles from '@/components/OptimalLayout/OptimalLayoutWithCircles';
import AspectRatioDiagram from '@/components/OptimalLayout/AspectRatioDiagram';
import SmallAspectRatioDiagram from '@/components/OptimalLayout/SmallAspectRatioDiagram';
import { LikeButton } from '@/components/LikeButton/LikeButton';
import MDXCodeBlock from '@/components/MDXCodeBlock';
import CollisionDetectionDemo from '@/components/CollisionDetectionDemo';
import { ArrowBigRight, ArrowBigDown, ArrowLeft } from 'lucide-react';
import { parseFrontmatter } from '@/utils/parseFrontmatter';

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

  const fileContent = await readFile(mdxPath, 'utf-8');
  const { content: source } = parseFrontmatter(fileContent);

  return (
    <div className="col-span-full text-start max-w-4xl mx-auto px-4 py-8 pb-16">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-[#292D3E] hover:text-[#1a1a5a] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all posts</span>
      </Link>
      <MDXRemote
        source={source}
        components={{
          OptimalSpaceExample,
          OptimalLayoutWithCircles,
          AspectRatioDiagram,
          SmallAspectRatioDiagram,
          code: MDXCodeBlock,
          CollisionDetectionDemo,
          ArrowBigRight,
          ArrowBigDown,
          Image,
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-[#292D3E] mt-2 mb-4">
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
              rel="noopener"
              className="text-[#2e365a] underline hover:text-[#1a1a5a]"
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
