import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amro Karar | AI Engineer",
  description: "Personal portfolio site showcasing work, projects, and background.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${signika.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
