// Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  X,
  Menu,
  ChevronDown,
} from 'lucide-react';

// Icon Component to render different icons
function IconComponent({ name, className }) {
  switch (name) {
    case 'plane':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      );
    case 'hotel':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
          <path d="M2 21h20" />
          <path d="M12 7v.01" />
          <path d="M12 11v.01" />
          <path d="M12 15v.01" />
          <path d="M12 19v.01" />
          <path d="M16 7v.01" />
          <path d="M16 11v.01" />
          <path d="M16 15v.01" />
          <path d="M16 19v.01" />
          <path d="M8 7v.01" />
          <path d="M8 11v.01" />
          <path d="M8 15v.01" />
          <path d="M8 19v.01" />
        </svg>
      );
    case 'train':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="3" width="16" height="16" rx="2" />
          <path d="M4 11h16" />
          <path d="M12 3v8" />
          <path d="m8 19-2 3" />
          <path d="m18 22-2-3" />
          <path d="M8 15h0" />
          <path d="M16 15h0" />
        </svg>
      );
    case 'bus':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 6v6" />
          <path d="M16 6v6" />
          <path d="M2 12h20" />
          <path d="M7 18h10" />
          <path d="M18 18h1a2 2 0 0 0 2-2v-7a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v7a2 2 0 0 0 2 2h1" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case 'car':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
          <circle cx="6.5" cy="16.5" r="2.5" />
          <circle cx="16.5" cy="16.5" r="2.5" />
        </svg>
      );
    case 'passport':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M8 18h8" />
        </svg>
      );
    default:
      return null;
  }
}

// Social Media Button Component
function SocialButton({ icon }) {
  return (
    <a
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors"
    >
      {icon}
    </a>
  );
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Flights', icon: 'plane', path: '/flights' },
    { name: 'Hotels', icon: 'hotel', path: '/hotels' },
    { name: 'Trains', icon: 'train', path: '/trains' },
    { name: 'Bus', icon: 'bus', path: '/bus' },
    { name: 'Cabs', icon: 'car', path: '/cabs' },
    { name: 'Visa', icon: 'passport', path: '/visa' },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('mobile-sidebar');
      if (sidebar && !sidebar.contains(event.target) && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Company Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Replace with your actual logo */}
              <img
                src="/src/assets/logo.png"
                alt="Urbane Travels Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden lg:flex items-center  space-x-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="group flex flex-col items-center  rounded-md justify-center w-20 h-20 rounded-md p-2 transition-all hover:bg-blue500"
              >
                <div className="w-10 h-10 p-0  flex items-center justify-center rounded-full bg-blue50 group-hover:bg-white/90 transition-all">
                  <IconComponent
                    name={item.icon}
                    className="w-5 h-5 text-blue500 group-hover:text-blue600"
                  />
                </div>
                <span className="mt-1 text-sm font-bold text-gray700 group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Login, Customer Care & Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center gap-1 rounded-md bg-blue50 border border-blue500 py-2 px-4 text-sm font-medium text-blue600 transition-all hover:bg-blue500 hover:text-white focus:ring-2 focus:ring-blue300"
              >
                Login
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isLoginOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isLoginOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link
                    to="/customer-login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    Customer Login
                  </Link>
                  <Link
                    to="/agent-login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    Agent Login
                  </Link>
                </div>
              )}
            </div>

            <div className="flex space-x-2">
              <SocialButton icon={<Facebook className="w-4 h-4" />} />
              <SocialButton icon={<Twitter className="w-4 h-4" />} />
              <SocialButton icon={<Instagram className="w-4 h-4" />} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-blue50 rounded-full bg-gray-100 text-gray700 focus:outline-none hover:bg-gray200 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 " />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden transition-all"
          onClick={() => setIsSidebarOpen(false)}
        >
          {/* Sidebar Content - Prevent click propagation */}
          <div
            id="mobile-sidebar"
            className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-5 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-blue50 rounded-full bg-gray-100 text-gray600 hover:bg-gray200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mt-2 mb-8">
              <div className="flex items-center justify-center ">
                <img
                  src="/src/assets/logo.png"
                  alt="Urbane Travels Logo"
                  className="h-15 w-auto  "
                />
              </div>
            </div>

            {/* Sidebar Menu */}
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-blue50 group"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue100 group-hover:bg-blue200 transition-colors">
                    <IconComponent
                      name={item.icon}
                      className="w-4 h-4 text-blue600"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray700">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Sidebar Login Button */}
            <div className="mt-8">
              <div className="relative">
                <button
                  onClick={() => setIsLoginOpen(!isLoginOpen)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue500 text-white font-medium hover:bg-blue-600 transition-colors"
                >
                  Login
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isLoginOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isLoginOpen && (
                  <div className="absolute left-0 right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Link
                      to="/customer-login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={() => {
                        setIsLoginOpen(false);
                        setIsSidebarOpen(false);
                      }}
                    >
                      Customer Login
                    </Link>
                    <Link
                      to="/agent-login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={() => {
                        setIsLoginOpen(false);
                        setIsSidebarOpen(false);
                      }}
                    >
                      Agent Login
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Social Icons */}
            <div className="mt-8 flex justify-center space-x-3 ">
              <SocialButton icon={<Facebook className="w-4 h-4 " />} />
              <SocialButton icon={<Twitter className="w-4 h-4" />} />
              <SocialButton icon={<Instagram className="w-4 h-4" />} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}