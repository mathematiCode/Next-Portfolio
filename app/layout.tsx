import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import '../index.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Julianna Messineo',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <div className="lg:px-8 mx-auto">{children}</div>
      </body>
    </html>
  );
}
