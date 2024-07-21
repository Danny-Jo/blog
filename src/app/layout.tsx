import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import ThemeProvider from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MainContainer from '@/components/main-container';
import metadataJson from '@/data/metadata.json';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: metadataJson.title,
  description: metadataJson.description,
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
