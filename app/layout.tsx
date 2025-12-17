import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import Header from "@/src/components/Header";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bible",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: "Estudio bíblico",
  description: "Lectura, contexto y exploración de los textos bíblicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${baskerville.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
