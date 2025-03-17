import {
  FeatureSection,
  Footer,
  HeroSection,
  Navbar,
  PricingSection,
  Testimonials,
  WorkFlow,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 x-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <PricingSection />
        <Testimonials />
        <Footer/>
      </div>
    </>
  );
}

export default App;
