import type { Metadata } from "next";
import { BootstrapClient } from "@/components/layout/BootstrapClient";
import "../styles/app/globals.scss";

export const metadata: Metadata = {
  title: "WebMade Studio - We build the web your clients deserve.",
  description:
    "Refactored one-page experience with Next.js, Bootstrap, SCSS modules, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
