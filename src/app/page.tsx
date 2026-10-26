import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { PracticeSection } from "@/components/home/PracticeSection";
import { SiteShell } from "@/components/SiteShell";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <AboutSection />
      <PracticeSection />
      <ContactSection />
    </SiteShell>
  );
}
