import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  return (
    <section className="py-12 md:py-16 bg-card">
      <Container>
        <SectionHeading title="What Our Customers Say" centered />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {testimonials.slice(0, 10).map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <StarRating rating={t.rating} showCount={false} size="sm" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
