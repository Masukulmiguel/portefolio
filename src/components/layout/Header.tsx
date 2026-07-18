"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/data/constants";
import Navigation from "./Navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold gradient-text">
          Masukulu
        </Link>

        <Navigation items={NAV_ITEMS} />

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            {SOCIAL_LINKS.map((link) => {
              const Icon =
                link.icon === "Github"
                  ? Github
                  : link.icon === "Linkedin"
                    ? Linkedin
                    : link.icon === "MessageCircle"
                      ? MessageCircle
                      : Mail;
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <ThemeToggle />

          <button
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Link
                href="/"
                className="text-xl font-bold gradient-text"
                onClick={() => setMobileOpen(false)}
              >
                Masukulu
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 pt-12">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-4 pt-6">
                {SOCIAL_LINKS.map((link) => {
                  const Icon =
                    link.icon === "Github"
                      ? Github
                      : link.icon === "Linkedin"
                        ? Linkedin
                        : link.icon === "MessageCircle"
                          ? MessageCircle
                          : Mail;
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
