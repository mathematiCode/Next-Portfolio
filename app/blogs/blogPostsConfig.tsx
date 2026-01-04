import Image from 'next/image';
import CollisionDetectionDemoStatic from '@/components/CollisionDetectionDemoStatic';
import OptimalLayoutWithCircles from '@/components/OptimalLayout/OptimalLayoutWithCircles';
import {
  CombinatorialExplosionPreview,
  ContextPreview,
  TooManyParamsPreview,
} from '@/components/CodePreviews';
import LoadingSequenceDiagram from '@/components/LoadingSequenceDiagram';

export interface BlogPostConfig {
  id: string;
  title: string;
  preview?: React.ReactNode;
  published: boolean;
}

export const blogPostsConfig: BlogPostConfig[] = [
  {
    id: '2025-review',
    title: '2025 Year in Review',
    preview: (
      <Image
        src="/2025-review.png"
        alt="career progression diagram showing Math Game to an Apprenticeship to an Intership to a Job Offer"
        loading="eager"
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
