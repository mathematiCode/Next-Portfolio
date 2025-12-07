import Link from 'next/link';

function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/timeline">Timeline</Link>
      <Link href="/timelineblock">Timeline Block</Link>
    </div>
  );
}

export default Navbar;
