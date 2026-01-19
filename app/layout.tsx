import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { BackToTop } from "@/components/back-to-top"
import { Toaster } from "sonner"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "PT. QUADRA GLOBAL NUSANTARA | Jasa Konstruksi & Infrastruktur Terpercaya",
    template: "%s | PT. QUADRA GLOBAL NUSANTARA"
  },
  description: "PT. QUADRA GLOBAL NUSANTARA spesialis jasa aspal hotmix, betonisasi, paving block, dan konstruksi jembatan. Solusi infrastruktur profesional di Indonesia.",
  keywords: [
    "jasa konstruksi",
    "perusahaan konstruksi",
    "kontraktor bangunan",
    "kontraktor jalan",
    "jasa pengaspalan",
    "aspal hotmix",
    "betonisasi jalan",
    "paving block",
    "cut and fill",
    "survei topografi",
    "konstruksi infrastruktur",
    "kontraktor profesional",
    "kontraktor terpercaya",
    "jasa konstruksi jawa barat",
    "kontraktor jawa barat",
    "PT Quadra Global Nusantara"
  ],
  verification: {
    google: 'kseDHac5MrZx15_beLTq0JmJ04RGZDy1WkUiiNMM4x4',
  },

  authors: [{ name: "PT. QUADRA GLOBAL NUSANTARA" }],
  creator: "PT. QUADRA GLOBAL NUSANTARA",
  publisher: "PT. QUADRA GLOBAL NUSANTARA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/logo-qgn.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-qgn.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo-qgn.png",
        type: "image/png",
      },
    ],
    apple: "/logo-qgn.png",
  },
  metadataBase: new URL("https://quadraglobal.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://quadraglobal.id",
    siteName: "PT. QUADRA GLOBAL NUSANTARA",
    title: "PT. QUADRA GLOBAL NUSANTARA | Jasa Konstruksi & Infrastruktur",
    description: "Spesialis jasa aspal hotmix, betonisasi, paving block, dan konstruksi jembatan profesional di Indonesia.",
    images: [
      {
        url: "/logo-qgn.png",
        width: 1200,
        height: 630,
        alt: "PT. QUADRA GLOBAL NUSANTARA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. QUADRA GLOBAL NUSANTARA | Jasa Konstruksi & Infrastruktur",
    description: "Spesialis jasa aspal hotmix, betonisasi, paving block, dan konstruksi jembatan profesional.",
    images: ["/logo-qgn.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT. QUADRA GLOBAL NUSANTARA",
    "image": "https://quadraglobal.id/logo-qgn.png",
    "@id": "https://quadraglobal.id",
    "url": "https://quadraglobal.id",
    "telephone": "+6285163152629",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kp. Pabuaran, Desa Cicadas, Kec. Gunung Putri",
      "addressLocality": "Kab. Bogor",
      "addressRegion": "Jawa Barat",
      "postalCode": "16964",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.4298417,
      "longitude": 106.9242588
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/quadra.global/"
    ],
    "knowsAbout": [
      "Jasa Aspal Hotmix",
      "Betonisasi Jalan",
      "Pemasangan Paving Block",
      "Konstruksi Jembatan",
      "Infrastruktur Jalan"
    ]
  }

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <BackToTop />
        <Analytics />
        <Toaster position="top-center" richColors />
        <a
          href="https://wa.me/6285163152629"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Kontak WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
      </body>
    </html>
  )
}
