import { Headphones, RotateCcw, Shield, Star, Truck } from "lucide-react";
import { features } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap = {
  truck: Truck,
  shield: Shield,
  rotate: RotateCcw,
  headphones: Headphones,
  star: Star,
};

export function FeaturesRow() {
  return (
    <section className="border-y border-border bg-card py-10 md:py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Truck;
            return (
              <div key={feature.id} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 hover:bg-accent/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
