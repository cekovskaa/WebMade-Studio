import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import styles from "../styles/app/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HighlightsSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
