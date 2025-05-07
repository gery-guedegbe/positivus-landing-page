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
        <title>Positivus Landing Page</title>
        <meta name="description" content="" />
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
