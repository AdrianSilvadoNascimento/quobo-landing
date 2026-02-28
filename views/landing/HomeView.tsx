import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { Features } from '@/components/sections/Features';
import { MobileSection } from '@/components/sections/MobileSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export function HomeView() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <MobileSection />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
