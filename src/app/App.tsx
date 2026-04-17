import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { MenuShowcase } from './components/MenuShowcase';
import { SpecialOffers } from './components/SpecialOffers';
import { Advantages } from './components/Advantages';
import { OurStory } from './components/OurStory';
import { OrderMethods } from './components/OrderMethods';
import { SocialFeed } from './components/SocialFeed';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustedBy />
      <MenuShowcase />
      <SpecialOffers />
      <Advantages />
      <OurStory />
      <OrderMethods />
      <SocialFeed />
      <Testimonials />
      <Footer />
    </div>
  );
}