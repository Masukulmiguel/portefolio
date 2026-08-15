"use client";

import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";

export default function ServicesSection() {
  const topServices = services.slice(0, 6);

  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 text-center">
            O que faco
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2
            className="font-black uppercase text-center mb-16 text-[#0C0C0C] sm:mb-20"
            style={{ fontSize: "clamp(2.5rem, 8vw, 80px)" }}
          >
            Servicos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topServices.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <div className="group p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white text-sm font-bold"
                    style={{ backgroundColor: service.color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C0C0C] text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {service.features && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, j) => (
                        <span
                          key={j}
                          className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
