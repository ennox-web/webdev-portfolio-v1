import "./globals.css"

import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"

import Layout from "./components/Layout"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E.N. Nox",
  description:
    "Emily Nox is an experienced software engineer who enjoys working the full stack from complex backends to responsive frontends.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        <Layout> {children} </Layout>
      </body>
    </html>
  )
}
