import React, { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import UnifiedGallery from '../components/home/UnifiedGallery';

export const GalleryPage = () => {
  useEffect(() => {
    document.title = "Visual Gallery | Prabhaa Hotels Group | Rooms, Dining & Halls";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="IMMERSIVE VISUALS"
          title="Prabhaa Hotels Gallery"
          subtitle="Explore high-definition photos of Prabhaa Grand Inn and Prabaa Royal Park across rooms, restaurants, event halls, and hotel ambience."
        />

        <UnifiedGallery limit={null} showFilter={true} isPage={true} />
      </div>
    </div>
  );
};

export default GalleryPage;
