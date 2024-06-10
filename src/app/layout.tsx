import Link from 'next/link';
import './globals.css';
import Providers, { RouterContext } from './Providers';
import SwitchThemes from './components/SwitchTheme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
