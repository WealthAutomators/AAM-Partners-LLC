"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

export function HeroBanner() {
  return (
    <section className="relative">
      <Carousel autoplay showDots showArrows className="w-full">
        {heroSlides.map((slide) => (
          <div key={slide.id} className="relative aspect-[16/6] min-h-[480px] w-full md:min-h-[560px] lg:aspect-[16/5]">
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className="object-cover"
              priority={slide.id === "1"}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            <Container className="relative flex h-full items-center">
              <motion.div
                className="max-w-2xl text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                  {slide.headline}
                </h1>
                <p className="mt-4 text-base text-white/90 md:text-lg">{slide.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-accent">
                    <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                  </Button>
                  {slide.secondaryCtaText && slide.secondaryCtaLink && (
                    <Button asChild size="lg" variant="secondary" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                      <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            </Container>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
