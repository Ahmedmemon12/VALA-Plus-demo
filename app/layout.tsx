import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
// import { Header } from "@/components/layout/header";
// import { Sidebar } from "@/components/layout/sidebar";
import { HeaderSidebar } from "@/components/layout/headerSidebar";
import { Footer } from "@/components/layout/footer";
import { VoiceModal } from "@/components/layout/voiceModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VALA Plus - Child Care Management",
  description: "AI-Powered Child Care Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="min-h-screen bg-[#ccc]">
            {/* <Header /> */}
            <HeaderSidebar />
            <div className="flex">
              {/* <Sidebar /> */}
              <VoiceModal />
              <main className="flex-1 pb-16 mt-16">{children}</main>
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
