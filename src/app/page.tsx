"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection"),
  { ssr: false },
);
const MarqueeSection = dynamic(
  () => import("@/components/sections/MarqueeSection"),
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
    <div style={{ overflowX: "clip", backgroundColor: "#0C0C0C" }}>
      <HeroSection />
      <MarqueeSection />
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
