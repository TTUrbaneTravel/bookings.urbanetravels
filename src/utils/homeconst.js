// utils/homeconst.js

// Demo images - replace with your actual images in production
export const DEMO_IMAGES = {
    hero: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    hero2: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop",
    hero3: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=2070&auto=format&fit=crop",
    dest1: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070&auto=format&fit=crop",
    dest2: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop",
    dest3: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
  };
  
  // Constants
  export const destinations = [
    DEMO_IMAGES.dest1,
    DEMO_IMAGES.dest2,
    DEMO_IMAGES.dest3,
    DEMO_IMAGES.dest1,
    DEMO_IMAGES.dest2,
    DEMO_IMAGES.dest3,
  ];
  
  export const heroImages = [DEMO_IMAGES.hero, DEMO_IMAGES.hero2, DEMO_IMAGES.hero3];
  
  export const offerTabs = ["all", "flights", "hotels", "packages", "bankOffers"];
  
  export const offersContent = {
    all: [
      { title: "Summer Special", description: "Get 20% off on all summer destinations. Limited time offer!" },
      { title: "Family Package", description: "Kids stay free when booking a family suite. Valid until December." },
      { title: "Early Bird Discount", description: "Book 3 months in advance and get 15% off your entire trip." },
      { title: "Weekend Getaway", description: "Special rates for weekend trips to selected destinations." },
    ],
    flights: [
      { title: "Round Trip Discount", description: "Save 10% when you book a round trip flight to any destination." },
      {
        title: "Business Class Upgrade",
        description: "Upgrade to business class for just $199 on international flights.",
      },
    ],
    hotels: [
      { title: "Stay 4, Pay 3", description: "Get one night free when you book four consecutive nights." },
      { title: "Luxury Suite Deal", description: "30% off on all luxury suites for stays longer than 2 nights." },
    ],
    packages: [
      { title: "All-Inclusive Deal", description: "Book an all-inclusive package and get airport transfers for free." },
      { title: "Adventure Package", description: "Book any adventure package and get a free guided tour." },
    ],
    bankOffers: [
      { title: "Credit Card Offer", description: "Get 5% cashback when you pay with our partner credit cards." },
      { title: "EMI Option", description: "0% interest on EMI for 6 months with select banks." },
    ],
  };
  
  export const infoBlocks = [
    {
      title: "Destinations",
      description: "Explore over 500 destinations across 6 continents with our curated travel experiences.",
      icon: "🌍",
    },
    {
      title: "Accommodations",
      description: "From luxury resorts to cozy boutique hotels, find the perfect place to stay.",
      icon: "🏨",
    },
    {
      title: "Activities",
      description: "Discover thousands of activities and experiences to make your trip unforgettable.",
      icon: "🏄‍♂️",
    },
    {
      title: "Transportation",
      description: "Seamless travel with our flight, train, and car rental booking services.",
      icon: "✈️",
    },
    {
      title: "Support",
      description: "24/7 customer support to assist you before, during, and after your journey.",
      icon: "🛎️",
    },
  ];
  
  export const faqs = [
    {
      question: "How do I book a trip?",
      answer:
        "You can book a trip through our website by selecting your destination, dates, and preferences. Follow the simple booking process and receive instant confirmation.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our standard cancellation policy allows free cancellation up to 48 hours before your scheduled trip. Different packages may have specific policies, which will be clearly indicated during booking.",
    },
    {
      question: "Do you offer travel insurance?",
      answer:
        "Yes, we offer comprehensive travel insurance options that cover trip cancellations, medical emergencies, lost luggage, and more. You can add insurance during the booking process.",
    },
    {
      question: "How can I get the best deals?",
      answer:
        "To get the best deals, sign up for our newsletter, book early, be flexible with your travel dates, and check our special offers section regularly. We also have seasonal promotions and flash sales.",
    },
  ];
  
  export const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      feedback:
        "Our trip to Bali was absolutely perfect! The accommodations were luxurious, and the guided tours were informative and fun. Will definitely book through this platform again.",
    },
    {
      name: "Michael Chen",
      rating: 4,
      feedback:
        "Great experience overall. The booking process was smooth, and customer service was responsive. The only minor issue was a slight delay with the airport pickup.",
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      feedback:
        "The European tour package exceeded our expectations. Every detail was taken care of, and the local guides were knowledgeable and friendly. Highly recommend!",
    },
  ];