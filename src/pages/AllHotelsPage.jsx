import React, { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import OurHotels from '../components/home/OurHotels';

export const AllHotelsPage = () => {
  useEffect(() => {
    document.title = "Our Hotels | Prabhaa Grand Inn & Prabaa Royal Park | Chittoor";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HOTEL DIRECTORY & COMPARISON"
          title="Two Destinations. One Standard."
          subtitle="Explore the unique characteristics, room types, culinary outlets, and locations of our two hotel properties in Chittoor."
        />

        <OurHotels />
      </div>
    </div>
  );
};

export default AllHotelsPage;
