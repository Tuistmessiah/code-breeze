import './styles/globals.scss';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Code Breeze',
  description: "It's a breeze!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=1" />
      </head>
      <body className="static-class">
        <div className="page-top-placeholder" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
