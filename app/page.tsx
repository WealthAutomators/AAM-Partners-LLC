import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { FeaturesRow } from "@/components/homepage/features-row";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { BestSellers } from "@/components/homepage/best-sellers";
import { AboutSection } from "@/components/homepage/about-section";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";
import { InstagramGallery } from "@/components/homepage/instagram-gallery";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      <DealsOfTheDay />
      <FeaturesRow />
      <FeaturedCollection />
      <PromotionalBanner />
      <BestSellers />
      <AboutSection />
      <NewArrivals />
      <CustomerReviews />
      <Newsletter />
      <InstagramGallery />
    </>
  );
}
