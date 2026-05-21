import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parent360 | Parenting with Clarity and Confidence',
  description: 'A modern AI-powered parenting platform for mindful families.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
