"use client";

import dynamic from "next/dynamic";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRecruiterMode } from "@/components/layout/RecruiterProvider";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: false });
const GitHubStats = dynamic(() => import("@/components/sections/GitHubStats"), { ssr: false });
const Terminal = dynamic(() => import("@/components/sections/Terminal"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false });
const WebGLBackground = dynamic(() => import("@/components/effects/WebGLBackground"), { ssr: false });

export default function Home() {
  const { isRecruiterMode } = useRecruiterMode();

  if (isRecruiterMode) {
    return (
      <div className="min-h-screen bg-white">
        {/* ResumeView is rendered by Header */}
      </div>
    );
  }

  return (
    <DashboardLayout>
      <WebGLBackground />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <TechStack />
        <ProjectsSection />
        <Experience />
        <GitHubStats />
        <Terminal />
        <Contact />
        <Footer />
      </div>
    </DashboardLayout>
  );
}
