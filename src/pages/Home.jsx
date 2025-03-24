// Home.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  destinations,
  DEMO_IMAGES,
  heroImages,
  offerTabs,
  offersContent,
  infoBlocks,
  faqs,
  reviews,
} from '../utils/homeconst';

// Component definitions
const Button = ({ children, className, variant, onClick }) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

  const variantStyles = {
    default: 'bg-teal-700 text-white hover:bg-teal-800',
    outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizeStyles = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  const variantStyle = variant ? variantStyles[variant] : variantStyles.default;
  const sizeStyle = sizeStyles.default;

  return (
    <button className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
    />
  );
};

const Card = ({ children, className }) => {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}>{children}</div>;
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 pt-0 ${className || ''}`}>{children}</div>;
};

const Tabs = ({ children, defaultValue, onValueChange, className }) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === TabsList || child.type === TabsContent) {
        return React.cloneElement(child, {
          value,
          onValueChange: handleValueChange,
        });
      }
    }
    return child;
  });

  return <div className={`${className || ''}`}>{childrenWithProps}</div>;
};

const TabsList = ({ children, value, onValueChange, className }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === TabsTrigger) {
      return React.cloneElement(child, {
        isActive: child.props.value === value,
        onSelect: () => onValueChange(child.props.value),
      });
    }
    return child;
  });

  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className || ''}`}
    >
      {childrenWithProps}
    </div>
  );
};

const TabsTrigger = ({ children, value, isActive, onSelect, className }) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive ? 'bg-background text-foreground shadow-sm' : 'hover:bg-muted hover:text-foreground'
      } ${className || ''}`}
      onClick={onSelect}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value, tabValue, className }) => {
  if (value !== tabValue) return null;

  return (
    <div
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className || ''}`}
    >
      {children}
    </div>
  );
};

const Accordion = ({ children, type, collapsible, className }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(openItems.includes(value) ? openItems.filter((item) => item !== value) : [...openItems, value]);
    }
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === AccordionItem) {
      return React.cloneElement(child, {
        isOpen: openItems.includes(child.props.value),
        onToggle: () => toggleItem(child.props.value),
      });
    }
    return child;
  });

  return <div className={`${className || ''}`}>{childrenWithProps}</div>;
};

const AccordionItem = ({ children, value, isOpen, onToggle, className }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === AccordionTrigger) {
        return React.cloneElement(child, {
          isOpen,
          onToggle,
        });
      } else if (child.type === AccordionContent) {
        return React.cloneElement(child, {
          isOpen,
        });
      }
    }
    return child;
  });

  return <div className={`border-b ${className || ''}`}>{childrenWithProps}</div>;
};

const AccordionTrigger = ({ children, isOpen, onToggle, className }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className || ''}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );
};

const AccordionContent = ({ children, isOpen, className }) => {
  if (!isOpen) return null;

  return (
    <div className={`overflow-hidden text-sm transition-all ${className || ''}`}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};

// Icons
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-down"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const MapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-map-pin"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Hotel = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-hotel"
  >
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
    <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
    <path d="M8 7h.01" />
    <path d="M16 7h.01" />
    <path d="M12 7h.01" />
    <path d="M12 11h.01" />
    <path d="M16 11h.01" />
    <path d="M8 11h.01" />
    <path d="M10 22v-6.5m4 0V22" />
  </svg>
);

const Activity = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-activity"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

// Main component
const TravelWebsite = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImages[0] || '/placeholder.svg'}
            alt="Exotic travel destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          >
            A Touch of Exotic
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8"
          >
            Discover breathtaking destinations and create unforgettable memories
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-2xl relative"
          >
            <Input
              type="text"
              placeholder="Where would you like to go?"
              className="h-14 pl-12 pr-4 rounded-full text-lg shadow-xl border-2 border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/70"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">
              <Search />
            </div>
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full h-10 px-6 bg-amber-500 hover:bg-amber-600 text-black font-medium">
              Search
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="h-10 w-10 text-white animate-bounce">
              <ChevronDown />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover stunning landscapes, vibrant cities, and hidden gems around the world
          </p>
        </div>

        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={destinations[i] || '/placeholder.svg'}
                    alt={`Destination ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Exotic Destination {i + 1}</h3>
                  <p className="text-white/80 mb-4">
                    Explore stunning landscapes, rich culture, and breathtaking sights
                  </p>

                  <div className="flex flex-col space-y-2 mb-4 text-sm">
                    <div className="flex items-center">
                      <div className="h-4 w-4 mr-2 text-amber-400">
                        <MapPin />
                      </div>
                      <span>Exotic Location, Country</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 mr-2 text-amber-400">
                        <Hotel />
                      </div>
                      <span>Luxury Accommodations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 mr-2 text-amber-400">
                        <Activity />
                      </div>
                      <span>Adventure Activities</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    >
                      View Details
                    </Button>
                    <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black">Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <Button
              variant="outline"
              className="rounded-full h-12 w-12 border-gray-300 flex items-center justify-center"
              onClick={prevSlide}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-12 w-12 border-gray-300 flex items-center justify-center"
              onClick={nextSlide}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-teal-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Unlock amazing deals on travel, accommodation, and experiences worldwide
            </p>
          </div>

          <div className="w-full">
            <div className="w-full max-w-md mx-auto mb-8 bg-white/10 p-1 rounded-full flex">
              {offerTabs.map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 rounded-full py-2 text-white transition-colors ${
                    activeTab === tab ? 'bg-white text-teal-900' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'bankOffers' ? 'Bank Offers' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {offersContent[activeTab].map((offer, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                    <div className="p-6">
                      <div className="absolute top-0 right-0 bg-amber-500 text-black px-4 py-1 text-sm font-medium rounded-bl-lg">
                        Limited Time
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-white/80 mb-4">{offer.description}</p>
                      <Button className="w-full bg-white border border-white text-white hover:bg-white/90">Claim Offer</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for a perfect travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {infoBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full text-3xl">
                    {block.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{block.title}</h3>
                <p className="text-gray-600 text-center">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ and Reviews */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FAQs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {faq.question}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-5 w-5 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {openFaqIndex === index && <div className="px-6 pb-4 pt-2 text-gray-600">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What Our Travelers Say</h2>

              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{review.feedback}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-teal-800 hover:bg-teal-900">View All Reviews</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelWebsite;