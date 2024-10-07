import localFont from 'next/font/local';
import './styles/globals.scss';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'My Landing Page',
  description: 'A great landing page!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
