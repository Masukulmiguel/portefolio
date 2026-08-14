"use client";

import FadeIn from "@/components/ui/FadeIn";
import Magnet from "@/components/ui/Magnet";
import ContactButton from "@/components/ui/ContactButton";

const navLinks = ["About", "Price", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex items-center justify-between px-6 pt-6 text-[#D7E2EA] md:px-10 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 text-sm md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="w-full overflow-hidden">
        <h1 className="hero-heading mt-6 w-full font-black uppercase leading-none tracking-tight whitespace-nowrap text-[14vw] sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m jack
        </h1>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="mt-auto flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 z-10 -translate-x-1/2 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Jack portrait"
            className="w-full h-auto"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
