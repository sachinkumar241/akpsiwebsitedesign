import type { Metadata } from "next";
import "./globals.css";
import SidebarShell from "@/components/SidebarShell";

export const metadata: Metadata = {
  title: "Sachin Kumar",
  description:
    "Personal portfolio of Sachin Kumar — GTM Engineer, Product Builder, and Lifelong Learner based in Chicago.",
  openGraph: {
    title: "Sachin Kumar",
    description: "GTM Engineer @ Autopilot | ISE & CS @ UIUC",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Inter loaded via Google Fonts CDN for Vercel production */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col md:flex-row h-screen bg-white font-sans antialiased">
        <SidebarShell />
        <main className="flex-1 overflow-y-auto content-scroll">{children}</main>
      </body>
    </html>
  );
}
