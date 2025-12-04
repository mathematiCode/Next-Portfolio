import Link from 'next/link';

function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/timeline">Timeline</Link>
      <Link href="/challenges">Challenges</Link>
    </div>
  );
}

export default Navbar;
