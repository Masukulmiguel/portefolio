"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { GlassCard } from "@/components/effects/GlassCard";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import SectionHeading from "@/components/layout/SectionHeading";
import { formatDate } from "@/lib/utils";

const gradients = [
  "from-primary/20 via-accent/10 to-secondary/20",
  "from-secondary/20 via-primary/10 to-accent/20",
  "from-accent/20 via-secondary/10 to-primary/20",
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Blog" subtitle="Artigos Recentes" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlassCard className="overflow-hidden h-full group">
                  <div
                    className={cn(
                      "aspect-video bg-gradient-to-br rounded-t-2xl flex items-center justify-center overflow-hidden",
                      gradients[index % gradients.length]
                    )}
                  >
                    <motion.div
                      className="w-full h-full bg-card/20 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-4xl font-bold text-primary/20">
                        {post.title.charAt(0)}
                      </span>
                    </motion.div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="default" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted text-sm line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime} min de leitura
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
