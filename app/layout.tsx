import type { Metadata } from "next";
import { inter, space_grotesk } from "@/assets/fonts";
import "./globals.css";
import Layout from "./_layout/Index";

export const metadata: Metadata = {
  title: "UY Portfolio",
  description: "Uthman Yussuff - Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${space_grotesk.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
