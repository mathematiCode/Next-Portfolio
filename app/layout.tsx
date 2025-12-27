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
      <body className="antialiased relative min-h-screen">
        <Navbar />
        <div className="lg:px-8 mx-auto">{children}</div>
        <p className="absolute bottom-0 left-0 right-0 text-center py-4">
          © 2025 Julianna Messineo
        </p>
      </body>
    </html>
  );
}
