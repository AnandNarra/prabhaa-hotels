import React, { useEffect } from 'react';
import OurHotels from '../components/home/OurHotels';

export const AllHotelsPage = () => {
  useEffect(() => {
    document.title = "Our Hotels | Prabhaa Grand Inn & Prabaa Royal Park | Chittoor";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-20 pb-20">
      <OurHotels />
    </div>
  );
};

export default AllHotelsPage;
