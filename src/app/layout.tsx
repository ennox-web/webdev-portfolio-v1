import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "E.N. Nox",
  description: "Emily Nox is an experienced software engineer who enjoys working the full stack from complex backends to responsive frontends.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        <Layout> {children} </Layout>
      </body>
    </html>
  );
}