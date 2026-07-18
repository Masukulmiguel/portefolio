"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const AiExpertise = dynamic(() => import("@/components/sections/AiExpertise"), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: false });
const Certificates = dynamic(() => import("@/components/sections/Certificates"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const Blog = dynamic(() => import("@/components/sections/Blog"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const MouseSpotlight = dynamic(() => import("@/components/effects/MouseSpotlight").then((m) => ({ default: m.MouseSpotlight })), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <MouseSpotlight />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <AiExpertise />
        <Experience />
        <Certificates />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
