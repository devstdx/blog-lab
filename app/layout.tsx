import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"]
});

export const metadata = {
  title: "Emmanuel Gutiérrez — Strategic Data & Execution",
  description:
    "Arquitecto de estrategias digitales, inteligencia de datos y disrupción financiera.",
  openGraph: {
    title: "Emmanuel Gutiérrez — Strategic Data & Execution",
    description:
      "Arquitecto de estrategias digitales, inteligencia de datos y disrupción financiera.",
    url: "https://emg.dev",
    siteName: "Emmanuel Gutiérrez",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Gutiérrez — Strategic Data & Execution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EMMANUELGTCZ",
    creator: "@EMMANUELGTCZ",
  },
  metadataBase: new URL("https://emg.dev"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${geist.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
