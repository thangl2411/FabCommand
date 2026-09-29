import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'FabCommand — Your business, in command', description: 'See the whole business. Know your next move. The AI management team for Lotus Coffee.', icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
