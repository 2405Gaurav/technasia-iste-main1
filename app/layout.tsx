import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "TECHNASIA'25 | India's Biggest Tech Festival",
  description:
    "Join India's premier tech festival celebrating innovation, creativity, and entrepreneurship with competitions, workshops, and networking opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Wrap the whole app with your ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-slate-950/30">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
