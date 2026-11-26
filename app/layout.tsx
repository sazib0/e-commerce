import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TopInfo } from "@/components/top-info";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NonFrozen - Fresh Farm Products',
  description: 'Your one-stop marketplace for fresh farm products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TopInfo />
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-right" expand={true} richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}