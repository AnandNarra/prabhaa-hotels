export const hotelsData = {
  grandInn: {
    id: "grand-inn",
    name: "Prabhaa Grand Inn",
    slug: "grand-inn",
    tagline: "Comfort. Convenience. Hospitality.",
    heroEyebrow: "PRABHAA HOTELS CHITTOOR",
    description: "Welcome to Prabhaa Grand Inn, the flagship property of Prabhaa Hotels in Chittoor. Designed for both discerning business executives and leisure travelers, the hotel offers 30 luxurious air-conditioned rooms, multi-cuisine dining outlets including Annapurna Veg and Amaravathi Non-Veg restaurants, and the celebrated Darbar Function Hall.",
    established: "2016",
    roomCount: "30 Luxurious A/C Rooms",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    themeColor: "from-amber-500/20 to-charcoal-900",
    accentColor: "#D4AF37",
    
    // Key highlights
    highlights: [
      { title: "30 Luxurious A/C Rooms", desc: "Thoughtfully crafted executive rooms & suites with plush amenities." },
      { title: "Dual Specialty Dining", desc: "Home to Annapurna Pure Veg & Amaravathi Spicy Andhra Non-Veg." },
      { title: "Darbar Function Hall", desc: "Grand air-conditioned hall for weddings, receptions & corporate meets." },
      { title: "Strategic Proximity", desc: "Just 1 km from Chittoor Bus Stand & Railway Station, 75 km to Tirupati Airport." },
      { title: "24/7 Room Service & Wi-Fi", desc: "Round the clock front desk, secure parking, laundry & power backup." }
    ],

    // Proximity and Location Stats
    transitInfo: [
      { landmark: "Chittoor Railway Station", distance: "01 Km", time: "3 Mins" },
      { landmark: "Chittoor Bus Terminal", distance: "01 Km", time: "3 Mins" },
      { landmark: "Kanipakam Vinayaka Temple", distance: "12 Km", time: "20 Mins" },
      { landmark: "Tirupati International Airport", distance: "75 Km", time: "75 Mins" },
      { landmark: "Vellore CMC & Golden Temple", distance: "35 Km", time: "40 Mins" }
    ],

    // Contact Information
    contact: {
      address: "#15-2143, Rajiv Gandhi Road, M.S.R Circle, Chittoor - 517 001, Andhra Pradesh, India",
      phones: ["+91 8572 233133", "+91 8572 233177"],
      mobile: "+91 95817 11150",
      email: "fom@prabhaagrandinn.in",
      mapQuery: "Prabhaa Grand Inn, Rajiv Gandhi Road, Chittoor, Andhra Pradesh",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8926343513344!2d79.0975!3d13.2185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad39023456789%3A0x123456789abcdef!2sPrabhaa%20Grand%20Inn!5e0!3m2!1sen!2sin!4v1620000000000"
    },

    // Rooms
    rooms: [
      {
        id: "gi-exec",
        name: "Executive Room",
        tariff: "₹2,499",
        taxInfo: "+ GST / Night",
        rawPrice: 2499,
        size: "260 sq.ft",
        occupancy: "2 Adults + 1 Child",
        bedType: "King Bed / Twin Beds",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80",
        description: "Our Executive Room is crafted with modern elegance and essential luxury for business executives and couples. Features contemporary decor, dedicated workspace, and soundproof windows.",
        amenities: [
          "Air Conditioning",
          "High-Speed Wi-Fi",
          "32-inch LED TV",
          "Tea / Coffee Maker",
          "24-Hour Room Service",
          "Premium Toiletries",
          "Work Desk with Lamp",
          "Complimentary Bottled Water"
        ],
        featured: true
      },
      {
        id: "gi-club",
        name: "Club Room",
        tariff: "₹2,999",
        taxInfo: "+ GST / Night",
        rawPrice: 2999,
        size: "340 sq.ft",
        occupancy: "2 Adults + 2 Children",
        bedType: "Luxury King Bed",
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80",
        description: "Elevate your stay with the Club Room, offering expanded living space, cozy seating lounge, superior bed comfort, and priority hospitality services for the utmost relaxation.",
        amenities: [
          "Centralized Air Conditioning",
          "High-Speed Wi-Fi",
          "43-inch Smart LED TV",
          "Mini Refrigerator",
          "Cozy Lounge Sofa",
          "Tea / Coffee Maker",
          "Daily Newspaper",
          "Luxury Bathroom with Rain Shower",
          "24-Hour In-room Dining"
        ],
        featured: true
      },
      {
        id: "gi-suite",
        name: "Suite Room",
        tariff: "₹3,999",
        taxInfo: "+ GST / Night",
        rawPrice: 3999,
        size: "480 sq.ft",
        occupancy: "3 Adults / Family",
        bedType: "Master King Bed + Living Area",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
        description: "The pinnacle of luxury at Prabhaa Grand Inn. Featuring a private bedroom and a distinct opulent living lounge with plush furnishings, tailored for families and executive VIPs.",
        amenities: [
          "Separate Living & Master Bedroom",
          "High-Speed Wi-Fi",
          "50-inch Smart 4K TV",
          "Electronic Safe",
          "Mini Bar / Refrigerator",
          "Plush Bathrobes & Slippers",
          "Express Check-in & Check-out",
          "Complimentary Fruit Platter",
          "Luxury Bathtub & Rain Shower"
        ],
        featured: true
      }
    ],

    // Dining Outlets
    dining: [
      {
        id: "annapurna",
        name: "Annapurna Veg Restaurant",
        type: "Pure Vegetarian",
        timing: "06:30 AM – 10:30 PM",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        description: "Authentic traditional South Indian vegetarian delicacies, hearty thalis, crispy dosas, and North Indian vegetarian specialties prepared with the purest ingredients and authentic spices.",
        specialties: ["South Indian Special Thali", "Ghee Roast Dosa", "Paneer Butter Masala", "Filter Coffee & Desserts"],
        features: ["Family A/C Dining", "Takeaway Available", "Breakfast Buffet", "Hygienic Kitchen"]
      },
      {
        id: "amaravathi",
        name: "Amaravathi Non-Veg Restaurant",
        type: "Specialty Non-Vegetarian",
        timing: "11:30 AM – 11:00 PM",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        description: "Renowned for its aromatic Andhra style non-vegetarian delicacies, spicy biryanis, succulent kebabs, seafood specials, and traditional gravies that satisfy every culinary craving.",
        specialties: ["Hyderabadi Dum Biryani", "Andhra Chicken Fry", "Amaravathi Mutton Curry", "Tandoori Platters"],
        features: ["Air Conditioned Dining", "Group Dining Areas", "Chef's Specials", "Prompt Service"]
      },
      {
        id: "touch-bar",
        name: "Touch Bar",
        type: "Lounge & Bar",
        timing: "11:00 AM – 11:00 PM (Coming Soon)",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        description: "A sophisticated haven for unwinding after a long workday. Enjoy fine spirits, handcrafted mocktails, cocktails, and curated bar bites in a warm, ambient setting.",
        specialties: ["Craft Cocktails", "Imported & Domestic Spirits", "Signature Finger Foods", "Ambient Lounge Music"],
        features: ["Premium Bar Counter", "Cozy Lounge Seating", "Screening Area"]
      }
    ],

    // Events & Banquets
    events: [
      {
        id: "darbar-hall",
        name: "Darbar Function Hall",
        capacity: "350+ Guests",
        area: "4,000 sq.ft",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
        description: "Darbar Function Hall is Chittoor's premier banquet and convention destination. Ideal for grand weddings, engagement ceremonies, family receptions, corporate conferences, product launches, and annual banquets.",
        features: [
          "Fully Air-Conditioned Grand Hall",
          "Advanced Audio-Visual & Stage Lighting",
          "Customizable Seating Layouts (Theater, Cluster, U-Shape)",
          "Dedicated Dining & Buffet Area",
          "Green Rooms / Bridal Dressing Suite",
          "In-House Catering (Veg & Non-Veg Multi-Cuisine)",
          "Valet Parking Facility"
        ],
        suitableFor: ["Weddings & Receptions", "Corporate Conferences", "Birthday Celebrations", "Seminars & Exhibitions"]
      }
    ]
  },

  royalPark: {
    id: "royal-park",
    name: "Prabaa Royal Park",
    slug: "royal-park",
    tagline: "Where Every Stay Is Unique.",
    heroEyebrow: "PREMIER BUSINESS CLASS & PURE VEG HOSPITALITY",
    description: "Prabaa Royal Park is a prestigious business-class hotel in Chittoor, established as the second unit of Prabhaa Grand Inn. Celebrating pure vegetarian culinary excellence with over 350 dishes across 10 categories, modern accommodations, and The Royal Hall, it provides an exquisite stay for business executives, families, and pilgrims.",
    established: "2021",
    roomCount: "30 Contemporary Guest Rooms",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    themeColor: "from-amber-600/20 to-charcoal-900",
    accentColor: "#C5A059",

    // Key highlights
    highlights: [
      { title: "100% Pure Veg Hospitality", desc: "Premier destination for vegetarian gourmets with 350+ dishes across 10 categories." },
      { title: "30 Contemporary Rooms", desc: "Budgeted and luxury guest rooms combining efficiency with immaculate cleanliness." },
      { title: "The Royal Hall", desc: "State-of-the-art air-conditioned banquet hall for up to 400 attendees." },
      { title: "Prime Church Street Location", desc: "Central location close to railway station, bus terminal, and main shopping bazaar." },
      { title: "Outdoor Catering & Sweets", desc: "Extensive outdoor catering for major functions and in-house sweet & savouries outlet." }
    ],

    // Proximity and Location Stats
    transitInfo: [
      { landmark: "Chittoor Railway Station", distance: "0.8 Km", time: "2 Mins" },
      { landmark: "Chittoor Bus Stand", distance: "0.9 Km", time: "3 Mins" },
      { landmark: "Main Commercial Market", distance: "0.2 Km", time: "1 Min Walk" },
      { landmark: "Kanipakam Temple", distance: "12 Km", time: "20 Mins" },
      { landmark: "Tirupati Airport", distance: "74 Km", time: "70 Mins" }
    ],

    // Contact Information
    contact: {
      address: "D.No 18-872 to 874, Church Street, Chittoor - 517 001, Andhra Pradesh, India",
      phones: ["+91 8572 233111", "+91 8572 233155"],
      mobile: "+91 95817 11172",
      email: "fom@prabaaroyalpark.com",
      mapQuery: "Prabaa Royal Park, Church Street, Chittoor, Andhra Pradesh",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.854321!2d79.0980!3d13.2170!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad39023456789%3A0x987654321fedcba!2sPrabaa%20Royal%20Park!5e0!3m2!1sen!2sin!4v1620000000000"
    },

    // Rooms
    rooms: [
      {
        id: "rp-standard",
        name: "Standard Room",
        tariff: "₹1,540",
        taxInfo: "/ Night",
        rawPrice: 1540,
        size: "220 sq.ft",
        occupancy: "1-2 Guests",
        bedType: "Queen Bed / Twin Beds",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
        description: "Efficient, spotlessly clean, and well-appointed room for budget-conscious business travelers and solo guests visiting Chittoor.",
        amenities: [
          "Air Conditioning",
          "Free High-Speed Wi-Fi",
          "Color LCD TV with Satellite Channels",
          "Hot & Cold Water 24/7",
          "Room Service",
          "Daily Housekeeping",
          "Comfortable Work Desk"
        ],
        featured: true
      },
      {
        id: "rp-exec",
        name: "Executive Room",
        tariff: "₹1,650",
        taxInfo: "/ Night",
        rawPrice: 1650,
        size: "270 sq.ft",
        occupancy: "2 Adults + 1 Child",
        bedType: "King Bed",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
        description: "Spacious business-class room featuring enhanced interior aesthetics, modern workstation, and superior linen for a restful night.",
        amenities: [
          "Individually Controlled AC",
          "High-Speed Wi-Fi",
          "LED Smart TV",
          "Tea / Coffee Maker",
          "24-Hour Room Service",
          "Direct Dial Phone",
          "En-suite Bathroom with Modern Fittings"
        ],
        featured: true
      },
      {
        id: "rp-minisuite",
        name: "Mini Suite",
        tariff: "₹1,980",
        taxInfo: "/ Night",
        rawPrice: 1980,
        size: "350 sq.ft",
        occupancy: "2 Adults + 2 Children",
        bedType: "Luxury King Bed + Sitting Area",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
        description: "An upgrade to cozy suite comfort with an integrated sitting lounge, ideal for small families and long-stay business executives.",
        amenities: [
          "Premium Air Conditioning",
          "Complimentary High-Speed Wi-Fi",
          "Large Smart TV",
          "Mini Fridge",
          "Cozy Seating Corner",
          "Complimentary Breakfast Options",
          "Express Laundry Service",
          "Luxury Toiletries"
        ],
        featured: true
      },
      {
        id: "rp-royalsuite",
        name: "Royal Suite",
        tariff: "₹2,530",
        taxInfo: "/ Night",
        rawPrice: 2530,
        size: "460 sq.ft",
        occupancy: "3 Adults / Family",
        bedType: "Grand King Bed + Living Room",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
        description: "The crown jewel of Prabaa Royal Park. Generously proportioned with royal interiors, living area, upscale amenities, and VIP hospitality services.",
        amenities: [
          "Separate Living & Master Bedroom",
          "High-Speed Wi-Fi",
          "Ultra HD Smart TV",
          "Mini Refrigerator & Safe",
          "Plush Bathrobes & Premium Linens",
          "24/7 Priority Room Service",
          "Complimentary Mineral Water & Fruit Basket",
          "Luxurious Bathroom with Rain Shower"
        ],
        featured: true
      }
    ],

    // Pure Veg Dining Outlets & Services
    dining: [
      {
        id: "rp-ac-veg",
        name: "A/C Veg Restaurant",
        type: "Fine Dining Vegetarian",
        timing: "07:00 AM – 10:30 PM",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        description: "A culinary spectacle featuring over 350 vegetarian dishes across 10 distinct categories. Prepared in pristine hygienic conditions with traditional recipes and authentic spices.",
        specialties: ["Royal Special Veg Thali", "Kaju Paneer Curry", "Stuffed Kulchas & Naans", "Special Pulao & Biryani"],
        features: ["Air Conditioned Dining", "Live Cooking Experience", "Family Booths", "Prompt Service"]
      },
      {
        id: "rp-nonac-veg",
        name: "Non A/C Veg Restaurant",
        type: "Quick Traditional Veg",
        timing: "06:30 AM – 10:00 PM",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        description: "Traditional South Indian tiffins, authentic filter coffee, quick lunch thalis, and daily specialty snacks served hot and fresh in a clean, vibrant setting.",
        specialties: ["Medu Vada & Sambar", "Rava Masala Dosa", "South Indian Meals", "Hot Badam Milk"],
        features: ["Fast Table Service", "Takeaway Counter", "Economical Pricing"]
      },
      {
        id: "rp-sweets",
        name: "Sweets & Savouries",
        type: "Traditional Confectionery",
        timing: "08:00 AM – 10:00 PM",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
        description: "Freshly crafted pure ghee sweets, traditional Andhra snacks, and crunchy savouries made with premium ingredients. Perfect for gift boxes and celebration treats.",
        specialties: ["Pure Ghee Mysurpa", "Motichoor Ladoo", "Kaju Katli", "Spicy Mixture & Murukku"],
        features: ["Gift Packing Available", "Festival Specials", "Purity Guaranteed"]
      },
      {
        id: "rp-yummy-foods",
        name: "Yummy Foods",
        type: "Fast Food & Snacks",
        timing: "11:00 AM – 10:30 PM",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        description: "A delight for youth and families featuring delicious chaats, burgers, pizzas, milkshakes, and instant snacks prepared fresh on order.",
        specialties: ["Pani Puri & Chaat", "Veg Supreme Burger", "Cheese Garlic Toast", "Thick Shakes"],
        features: ["Casual Dining", "Quick Bites", "Takeaway"]
      },
      {
        id: "rp-catering",
        name: "Outdoor Catering Services",
        type: "Doorstep Event Catering",
        timing: "On-Demand Booking",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        description: "Delivering unforgettable culinary experiences right to your doorstep for weddings, housewarmings, corporate gatherings, and large community celebrations.",
        specialties: ["Grand Wedding Buffets", "Traditional Banana Leaf Meals", "Live Food Counters", "Customized Menu Design"],
        features: ["Capacity up to 5,000+ guests", "Trained Service Crew", "Complete Setup & Cleanup"]
      }
    ],

    // Events & Banquets
    events: [
      {
        id: "royal-hall",
        name: "The Royal Hall (Banquet)",
        capacity: "400+ Guests",
        area: "4,500 sq.ft",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
        description: "The Royal Hall is an opulent air-conditioned venue ideal for grand wedding receptions, engagements, family ceremonies, corporate offsites, and commercial exhibitions in the heart of Chittoor.",
        features: [
          "Spacious Air Conditioned Banquet Space",
          "Dedicated Pure Veg Catering Infrastructure",
          "State-of-the-Art Sound & Stage Setup",
          "Separate Dining & Service Section",
          "Ample Parking & Lift Accessibility",
          "Professional Event Coordination Team"
        ],
        suitableFor: ["Weddings & Engagements", "Corporate Meetings & Offsites", "Product Launches & Expos", "Family Celebrations"]
      }
    ]
  }
};
