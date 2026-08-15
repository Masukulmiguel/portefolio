"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection"),
  { ssr: false },
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  { ssr: false },
);
const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection"),
  { ssr: false },
);
const TechStack = dynamic(
  () => import("@/components/sections/TechStack"),
  { ssr: false },
);
const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection"),
  { ssr: false },
);
const Experience = dynamic(
  () => import("@/components/sections/Experience"),
  { ssr: false },
);
const Contact = dynamic(
  () => import("@/components/sections/Contact"),
  { ssr: false },
);
const Footer = dynamic(
  () => import("@/components/layout/Footer"),
  { ssr: false },
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStack />
      <ProjectsSection />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
