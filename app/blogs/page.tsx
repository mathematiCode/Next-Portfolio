import Link from 'next/link';

function BlogsPage() {
  return (
    <>
      <h1> Blogs </h1>
      <div className="flex flex-col">
        <Link href="/blogs/calculate-optimal-dimensions">
          Calculate Optimal Dimensions
        </Link>
        <Link href="/blogs/collision-detection">
          Creating my own Collision Detection Algorithm
        </Link>
      </div>
    </>
  );
}

export default BlogsPage;
