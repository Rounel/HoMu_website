import {
  Hero,
  Features,
  HowItWorks,
  SocialProof,
  UseCases,
  BeforeAfter,
  Pricing,
  FAQ,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <UseCases />
      <BeforeAfter />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
