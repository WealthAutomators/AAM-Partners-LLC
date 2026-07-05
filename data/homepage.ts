import {
  Feature,
  HeroSlide,
  InstagramPost,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.svg",
    headline: "Everything Your Home Needs, All in One Place.",
    description:
      "Shop electronics, home essentials, toys, beauty products, kitchen accessories and more at prices you'll love.",
    ctaText: "Shop Collection",
    ctaLink: "/shop",
    secondaryCtaText: "Today's Deals",
    secondaryCtaLink: "/shop?sale=true",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Fast Shipping",
    description: "Free shipping on orders over $75. Delivered in 3–5 business days.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment information is protected with industry-standard encryption.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "Easy Returns",
    description: "Hassle-free 30-day returns on most items. We make it simple.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Customer Support",
    description: "Our friendly team is available Mon–Fri to help with orders and questions.",
  },
  {
    id: "5",
    icon: "star",
    title: "Trusted Quality",
    description: "Every product is carefully selected for quality, value, and reliability.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "wireless-earbuds",
  "electric-kettle",
  "air-fryer",
  "dog-bed",
  "bath-towel-set",
  "sunglasses-classic",
] as const;

export const homepageBestsellerSlugs = [
  "wireless-earbuds",
  "bluetooth-speaker",
  "bath-towel-set",
  "yoga-mat",
  "kids-learning-tablet",
  "coffee-grinder",
  "dog-bed",
  "electric-kettle",
] as const;

export const homepageFeaturedSlugs = [
  "wireless-earbuds",
  "electric-kettle",
  "bath-towel-set",
  "kids-learning-tablet",
  "standing-desk-lamp",
  "air-fryer",
  "yoga-mat",
  "dog-bed",
  "coffee-grinder",
  "bluetooth-speaker",
] as const;

export const homepageNewArrivalSlugs = [
  "stem-robot-kit",
  "vitamin-c-serum-set",
  "baby-monitor",
  "foam-roller",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Upgrade Your Everyday Living",
  description:
    "Discover premium products for every room in your home, from smart electronics to comfortable essentials, all in one place.",
  buttonText: "Shop Deals",
  buttonLink: "/shop?sale=true",
  image: "/banners/promo-1.svg",
};

export const aboutSection = {
  title: "Shopping Made Easy.",
  description:
    "AAM Partners LLC brings together quality products across multiple categories, helping families find everything they need in one trusted online marketplace. We focus on affordability, reliability, and a smooth shopping experience from browsing to checkout.",
  checklist: [
    "Wide selection across 12+ categories",
    "Competitive prices on everyday essentials",
    "Fast, reliable shipping nationwide",
    "Dedicated customer support team",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.svg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "Hand-picked favorites across electronics, home, beauty, and more — everything you need in one marketplace.",
  bannerImage: "/banners/featured.svg",
  categorySlug: "electronics",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Sports", slug: "sports-outdoors" },
];

export const instagramPosts: InstagramPost[] = [
  { id: "1", image: "/instagram/1.svg", alt: "Wireless earbuds and kitchen appliances on display" },
  { id: "2", image: "/instagram/2.svg", alt: "Home décor and bathroom essentials styled together" },
  { id: "3", image: "/instagram/3.svg", alt: "Kids toys and educational products" },
  { id: "4", image: "/instagram/4.svg", alt: "Beauty and personal care products flat lay" },
  { id: "5", image: "/instagram/5.svg", alt: "Sports gear and outdoor essentials" },
  { id: "6", image: "/instagram/6.svg", alt: "Office supplies and fashion accessories" },
];

export const newsletter = {
  title: "Get Exclusive Deals Before Everyone Else",
  description: "Subscribe for discounts, new arrivals, and weekly offers.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
