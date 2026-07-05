import Link from "next/link";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-xl shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-purple-900" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />
          <div className="absolute right-1/4 top-1/2 h-32 w-32 -translate-y-1/2 rotate-45 bg-accent/10" />
          <div className="relative flex flex-col items-start justify-center p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
              {promotionalBanner.title}
            </h2>
            <p className="mt-4 max-w-xl text-white/85 leading-relaxed">{promotionalBanner.description}</p>
            <Button asChild size="lg" variant="accent" className="mt-8">
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
