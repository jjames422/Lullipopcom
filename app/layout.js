import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lullipop & Co.',
  description: 'Luxury. Limited. Lullipop.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <NextUIProvider>
            <Navbar />
            {children} {/* Main content will render below the navbar */}
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
