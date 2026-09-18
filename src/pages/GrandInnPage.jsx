import React, { useEffect } from 'react';
import HotelHero from '../components/hotel/HotelHero';
import HotelSubNav from '../components/common/HotelSubNav';
import HotelAbout from '../components/hotel/HotelAbout';
import RoomShowcase from '../components/hotel/RoomShowcase';
import DiningSection from '../components/hotel/DiningSection';
import EventSection from '../components/hotel/EventSection';
import HotelGallery from '../components/hotel/HotelGallery';
import HotelContact from '../components/hotel/HotelContact';
import { hotelsData } from '../data/hotelsData';

export const GrandInnPage = () => {
  const hotel = hotelsData.grandInn;
  const otherHotel = hotelsData.royalPark;

  useEffect(() => {
    document.title = "Prabhaa Grand Inn | Luxury Hotel in Chittoor | Executive Rooms & Amaravathi";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF7]">
      <HotelHero hotel={hotel} />
      <HotelSubNav hotel={hotel} otherHotel={otherHotel} />
      <HotelAbout hotel={hotel} />
      <RoomShowcase hotel={hotel} />
      <DiningSection hotel={hotel} />
      <EventSection hotel={hotel} />
      <HotelGallery hotel={hotel} />
      <HotelContact hotel={hotel} />
    </div>
  );
};

export default GrandInnPage;
