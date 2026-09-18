import React, { useEffect } from 'react';
import CinematicHero from '../components/home/CinematicHero';
import AboutBrand from '../components/home/AboutBrand';
import OurHotels from '../components/home/OurHotels';
import Experiences from '../components/home/Experiences';
import UnifiedGallery from '../components/home/UnifiedGallery';
import Testimonials from '../components/home/Testimonials';

export const HomePage = () => {
  useEffect(() => {
    document.title = "Prabhaa Hotels | Luxury & Business Class Hospitality in Chittoor";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF7]">
      <CinematicHero />
      <AboutBrand />
      <OurHotels />
      <Experiences />
      <UnifiedGallery limit={8} />
      <Testimonials />
    </div>
  );
};

export default HomePage;
