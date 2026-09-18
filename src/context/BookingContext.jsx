import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState('grand-inn');
  const [selectedRoomId, setSelectedRoomId] = useState('');
  
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    adults: 2,
    children: 0,
    roomsCount: 1,
    guestName: '',
    guestPhone: '',
    guestEmail: '',
    specialRequests: ''
  });

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const openBooking = (hotelId = null, roomId = null) => {
    if (hotelId) {
      setSelectedHotel(hotelId);
    }
    if (roomId) {
      setSelectedRoomId(roomId);
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        selectedHotel,
        setSelectedHotel,
        selectedRoomId,
        setSelectedRoomId,
        bookingDetails,
        setBookingDetails,
        openBooking,
        closeBooking,
        toastMessage,
        showToast,
        setToastMessage
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
