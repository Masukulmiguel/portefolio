import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { RecruiterProvider } from "@/components/layout/RecruiterProvider";

export const metadata: Metadata = {
  title: "Masukulu Miguel | Tecnico de Informatica",
  description:
    "Portfolio profissional de Masukulu Miguel, tecnico de informatica de Luanda, Angola. Desenvolvimento full-stack, inteligencia artificial, ciberseguranca e infraestrutura de redes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <RecruiterProvider>
            {children}
          </RecruiterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
