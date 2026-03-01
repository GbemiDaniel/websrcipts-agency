import { Spotlight } from '../components/ui/Spotlight';
import { AnimatingHeroText } from '../components/ui/AnimatingHeroText';
import { ServiceGrid } from '../components/ui/ServiceGrid';
import { FeaturedWork } from '../components/ui/FeaturedWork';
import { AboutTeaser } from '../components/ui/AboutTeaser';
import { TestimonialGrid } from '../components/ui/TestimonialGrid';
import { ContactSection } from '../components/ui/ContactSection';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-primary selection:bg-accent-dev selection:text-white pb-32">
      {/* Background Ambience */}
      <Spotlight position={{ top: '-10%', left: '-10%' }} color="var(--glow-dev)" size="800px" />
      <Spotlight position={{ bottom: '10%', right: '-5%' }} color="var(--glow-writer)" size="600px" className="opacity-10" />

      {/* Hero / Header Spacer */}
      <div className="pt-32 pb-16 px-6 text-center z-10 relative flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 flex flex-col items-center gap-1 md:gap-3 w-full max-w-[100vw] overflow-hidden">
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-slate-300 to-slate-600 font-extrabold drop-shadow-sm pb-2 md:pb-0">We Build</span>
          <AnimatingHeroText
            words={[
              "Premium Brands",
              "Web UI/UX Design",
              "Digital Experiences",
              "Motion Graphics"
            ]}
            className="text-(--accent-dev) w-full px-4"
          />
        </h1>
        <p className="text-muted max-w-xl mx-auto text-lg">
          Pixel perfect implementation of premium digital experiences.
        </p>
      </div>

      {/* Services Grid (Mapped from Constant Data) */}
      <ServiceGrid />

      <FeaturedWork />

      <AboutTeaser />

      <TestimonialGrid />

      {/* Bottom CTA / Contact Section */}
      <ContactSection />

      {/* Subtle bottom anchor glow behind the Contact Section */}
      <Spotlight position={{ bottom: '0%', right: '0%' }} color="var(--glow-writer)" size="600px" className="opacity-10" />
    </main>
  );
}