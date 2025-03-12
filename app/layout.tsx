import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Providers } from "./providers";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular (400), Medium (500), Bold (700)
});

export const metadata: Metadata = {
  title: "PT. Tujuh Anugrah Abadi - The Most Comprehensive Printing & Technology Solutions in Indonesia",
  description: "PT. Tujuh Anugrah Abadi is a national company that operates in 88 major cities throughout Indonesia. The company prioritizes Information Technology and is engaged in the procurement of goods and services for both government and private sectors, e-commerce, and various other business lines. It was established by Maylani Haliman in 2010, under the name Seven Ink.",
  keywords: "PT Tujuh Anugrah Abadi, Tujuh Anugrah Abadi, distributor printer, distributor tinta printer, distributor tinta, distributor printer surabaya, distributor printer jakarta, distributor tinta jakarta, distributor tinta surabaya, distributor komputer, supplier komputer, supplier printer, supplier tinta printer, supplier tinta",
  authors: { name: "PT. Tujuh Anugrah Abadi" },
  openGraph: {
    title: "PT. Tujuh Anugrah Abadi - The Most Comprehensive Printing & Technology Solutions in Indonesia",
    description: "PT. Tujuh Anugrah Abadi menyediakan solusi terbaik untuk kebutuhan Anda.",
    url: "https://www.7anugrah.com/",
    siteName: "PT. Tujuh Anugrah Abadi",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT. Tujuh Anugrah Abadi",
              url: "https://www.7anugrah.com/",
              logo: "https://www.7anugrah.com/svg/logo.svg",
              sameAs: [
                "https://www.instagram.com/superink_official_store/",
              ],
            }),
          }}
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="14hnkJvIV11EP8l9d6qQcyQWbIXr38ZFiW7aULGUmCI" />
      </head>
      <body className={`${ubuntu.variable} antialiased`}>
        <Navigation />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
