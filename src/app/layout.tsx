import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masukulu Miguel | Técnico de TI & Especialista de TI",
  description:
    "Portfólio de Masukulu Miguel, técnico de TI e especialista de TI de Luanda, Angola. Especializado em desenvolvimento full-stack, inteligência artificial, cibersegurança e infraestrutura de redes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
