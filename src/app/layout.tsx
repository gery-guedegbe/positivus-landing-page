"use client";
import "@styles/globals.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { LenisWrapper } from "@components/LenisWrapper";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Core Meta Tags */}
        <title>Positivus | Modern Digital Marketing Solutions</title>
        <meta
          name="description"
          content="Boost your online presence with Positivus - Web development, SEO optimization and data-driven marketing strategies for maximum growth."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Open Graph (for social sharing) */}
        <meta
          property="og:title"
          content="Positivus | Digital Marketing Agency"
        />

        <meta
          property="og:description"
          content="Cutting-edge digital solutions to elevate your brand's online performance."
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Positivus | Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="Cutting-edge digital solutions to elevate your brand's online performance."
        />
        <meta name="twitter:image" content="/android-icon.png" />
      </Head>

      <body className="mediumDesktop:w-[90vw] ultraDesktop:w-[70vw] ultraLargDesktop:w-[60vw] mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-start gap-10 px-4 pt-2 lg:px-14 lg:pt-8">
        <LenisWrapper />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
