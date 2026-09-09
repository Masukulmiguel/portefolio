import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masukulu Miguel | Especialista de TI",
  description:
    "Portfolio profissional de Masukulu Miguel, especialista de TI de Luanda, Angola. Desenvolvimento full-stack, inteligencia artificial, ciberseguranca e redes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAF8F5] text-[#1C1917] antialiased">{children}</body>
    </html>
  );
}
