import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "electronics",
    name: "Electronics",
    image: "/categories/electronics.svg",
    description: "Smart gadgets, audio gear, and everyday tech essentials.",
    productCount: 3,
  },
  {
    id: "2",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    image: "/categories/home-kitchen.svg",
    description: "Appliances and tools to make home life easier.",
    productCount: 3,
  },
  {
    id: "3",
    slug: "bathroom",
    name: "Bathroom",
    image: "/categories/bathroom.svg",
    description: "Towels, organizers, and bathroom essentials.",
    productCount: 2,
  },
  {
    id: "4",
    slug: "educational-toys",
    name: "Educational Toys",
    image: "/categories/educational-toys.svg",
    description: "Learning tools that make education fun.",
    productCount: 2,
  },
  {
    id: "5",
    slug: "pet-supplies",
    name: "Pet Supplies",
    image: "/categories/pet-supplies.svg",
    description: "Comfort and care products for your pets.",
    productCount: 2,
  },
  {
    id: "6",
    slug: "beauty",
    name: "Beauty",
    image: "/categories/beauty.svg",
    description: "Skincare, hair care, and personal care favorites.",
    productCount: 2,
  },
  {
    id: "7",
    slug: "sports-outdoors",
    name: "Sports",
    image: "/categories/sports-outdoors.svg",
    description: "Gear for fitness, yoga, and outdoor activities.",
    productCount: 2,
  },
  {
    id: "8",
    slug: "office-supplies",
    name: "Office",
    image: "/categories/office-supplies.svg",
    description: "Desk accessories and workspace essentials.",
    productCount: 2,
  },
  {
    id: "9",
    slug: "fashion-accessories",
    name: "Fashion",
    image: "/categories/fashion-accessories.svg",
    description: "Accessories to complete your everyday look.",
    productCount: 2,
  },
  {
    id: "10",
    slug: "baby-products",
    name: "Baby",
    image: "/categories/baby-products.svg",
    description: "Safe, thoughtful products for little ones.",
    productCount: 2,
  },
  {
    id: "11",
    slug: "toys-games",
    name: "Toys & Games",
    image: "/categories/toys-games.svg",
    description: "Fun for kids and families of all ages.",
    productCount: 2,
  },
  {
    id: "12",
    slug: "health-wellness",
    name: "Health & Wellness",
    image: "/categories/health-wellness.svg",
    description: "Products to support your wellness routine.",
    productCount: 2,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
