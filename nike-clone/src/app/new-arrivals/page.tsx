import { HeroCarousel } from "@/components/hero-carousel";
import { FeaturedSections } from "@/components/featured-sections";
import { SportsCategories } from "@/components/sports-categories";
import { ProductGrid } from "@/components/product-grid";
import { ClassicsSection } from "@/components/classics-section";
import {
  heroSlides,
  featuredSections,
  sportsCategories,
  featuredProducts,
  classicCategories
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      <div className="container-nike">
        {/* Featured Athlete Sections */}
        <FeaturedSections sections={featuredSections} />

        {/* Sports Categories */}
        <SportsCategories categories={sportsCategories} />

        {/* Featured Products */}
        <ProductGrid
          products={featuredProducts}
          title="Popular Right Now"
          showScrollButtons={true}
        />

        {/* Shop The Classics */}
        <ClassicsSection categories={classicCategories} />
      </div>
    </main>
  );
}
