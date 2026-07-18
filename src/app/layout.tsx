import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://masukulumiguel.dev"),
  title: {
    default: "Masukulu Miguel | Engenheiro Tecnológico & Especialista em IA",
    template: "%s | Masukulu Miguel",
  },
  description:
    "Portfólio de Masukulu Miguel. Engenheiro Tecnológico, Especialista em Inteligência Artificial, Programador Full Stack, Entusiasta de Cibersegurança e Especialista em Infraestrutura de Rede.",
  keywords: [
    "Masukulu Miguel",
    "Engenheiro Tecnológico",
    "Inteligência Artificial",
    "Programador Full Stack",
    "Cibersegurança",
    "Infraestrutura de Rede",
    "Python",
    "React",
    "Next.js",
    "Angola",
    "Tecnologia",
    "Inovação",
    "Soluções",
  ],
  authors: [{ name: "Masukulu Miguel" }],
  creator: "Masukulu Miguel",
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://masukulumiguel.dev",
    siteName: "Portfólio Masukulu Miguel",
    title: "Masukulu Miguel | Engenheiro Tecnológico & Especialista em IA",
    description:
      "Engenheiro Tecnológico, Especialista em Inteligência Artificial, Programador Full Stack, Entusiasta de Cibersegurança e Especialista em Infraestrutura de Rede.",
    images: [
      {
        url: "/portefolio/images/brand/brand-identity.png",
        width: 1200,
        height: 630,
        alt: "Masukulu Miguel | Portfólio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masukulu Miguel | Engenheiro Tecnológico & Especialista em IA",
    description:
      "Engenheiro Tecnológico, Especialista em Inteligência Artificial, Programador Full Stack, Entusiasta de Cibersegurança e Especialista em Infraestrutura de Rede.",
    images: ["/portefolio/images/brand/brand-identity.png"],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/portefolio/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portefolio/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/portefolio/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portefolio/apple-touch-icon.png" />
        <link rel="manifest" href="/portefolio/manifest.json" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
