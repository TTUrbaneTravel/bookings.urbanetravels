import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SlashIcon as EyeSlashIcon,
  EyeIcon,
  ArrowRightIcon,
} from 'lucide-react';
import axios from 'axios';
import companyLogo from '../assets/logo.png'; // Adjust the path as needed

// Direct image URLs
export const DEMO_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop  ',
  hero2:
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop  ',
  hero3:
    'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=2070&auto=format&fit=crop  ',
  dest1:
    'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070&auto=format&fit=crop  ',
  dest2:
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop  ',
  dest3:
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop  ',
};

// Company logos
const COMPANY_LOGOS = {
  google:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg  ',
  facebook:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg  ',
  slr: 'https://img.icons8.com/color/48/000000/slr-camera.png  ',
  partner1: 'https://img.icons8.com/color/48/000000/airbnb.png  ',
  partner2: 'https://img.icons8.com/color/48/000000/tripadvisor.png  ',
  partner3: 'https://img.icons8.com/color/48/000000/booking-com.png  ',
  travelLogo: 'https://img.icons8.com/fluency/96/000000/around-the-globe.png  ',
};

export default function TravelLogin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = 'http://localhost:2025';
    const endpoint = isRegister
      ? `${API_BASE_URL}/register`
      : `${API_BASE_URL}/login`;

    // Basic validation
    if (
      isRegister &&
      (!formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.phone) // Ensure phone number is also checked
    ) {
      alert('Please fill in all fields.');
      return;
    }
    if (!isRegister && (!formData.email || !formData.password)) {
      alert('Please enter your email and password.');
      return;
    }
    if (isRegister && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(endpoint, formData);
      console.log('Response:', response.data);

      if (!isRegister) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
      } else {
        alert('Registration successful!');
        setIsRegister(false); // Switch to login form after successful registration
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);

      if (error.response) {
        // Server responded with an error status
        const { status, data } = error.response;
        if (status === 400) {
          alert(data.message || 'Bad request. Please check your inputs.');
        } else if (status === 401) {
          alert('Invalid email or password. Please try again.');
        } else if (status === 409) {
          alert('This email is already registered. Please log in.');
        } else {
          alert('Something went wrong. Please try again later.');
        }
      } else {
        alert('Network error. Please check your connection.');
      }
    }
  };
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = () => {
    setShowOtpInput(true); // Show OTP input box when "Send OTP" is clicked
  };

  const handleVerifyOTP = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating OTP verification delay
  };
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 overflow-hidden">
      {/* Left Side - Animated Travel Imagery */}
      <div className="relative hidden lg:block w-1/2 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            x: parallaxOffset.x,
            y: parallaxOffset.y,
            backgroundImage: `url('${DEMO_IMAGES.hero}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9)',
          }}
        />

        {/* Blue Backdrop Blur Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 flex flex-col justify-center items-start h-full px-16 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-6xl font-bold mb-6 leading-tight"
          >
            {isRegister
              ? 'Begin Your Journey With Us'
              : 'Welcome Back, Explorer'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-2xl text-blue-100 max-w-xl"
          >
            {isRegister
              ? 'Create an account to unlock a world of travel experiences, exclusive deals, and personalized recommendations.'
              : 'Sign in to continue your adventure. Your next destination awaits.'}
          </motion.p>
        </motion.div>
      </div>
      {/* Right Side - Forms */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            {/* Company Logo */}
            <img
              src={companyLogo}
              alt="Company Logo"
              className="mx-auto h-24 w-auto mb-4"
            />

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isRegister ? 'Join Wanderlust' : 'Sign In'}
            </h2>
            <p className="text-gray-600">
              {isRegister
                ? 'Create your account and start exploring'
                : 'Welcome back! Please enter your details'}
            </p>
          </div>

          <form className="space-y-5 " onSubmit={handleSubmit}>
            {isRegister && (
              <div className="flex flex-col gap-6">
                {/* Full Name and Phone Number Fields in Two Columns */}
                <div className="flex gap-6">
                  {/* Full Name Field */}
                  <div className="w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/* Phone Number Field with Send OTP Button */}
                  <div className="w-1/2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="123-456-7890"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray300 shadow-sm focus:ring-2 focus:ring-blue500 focus:border-blue500 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-6">
              {/* Email Address Field */}
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray300 shadow-sm focus:ring-2 focus:ring-blue500 focus:border-blue500 transition-all"
                />
              </div>

              {/* Password Field with Toggle Button */}
              <div className="w-1/2 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray300 shadow-sm focus:ring-2 focus:ring-blue500 focus:border-blue500 transition-all pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordShown(!passwordShown)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray500 hover:text-gray700"
                  >
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {isRegister && (
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray300 focus:ring-2 focus:ring-blue500 focus:border-blue500 transition-all"
                  />
                </div>
              </div>
            )}
            {!isRegister && (
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 group relative"
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? (
                <div className="w-6 h-6 border-4 border-white border-t-gray-500 rounded-full animate-spin"></div>
              ) : (
                <>
                  {isRegister ? 'Create Account' : 'Sign In'}
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-300 absolute w-full"></div>
              <span className="bg-white px-3 text-sm text-gray-500 relative">
                or continue with
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray300 rounded-lg transition-all w-full"
              >
                {/* Google Logo */}
                <img
                  src={COMPANY_LOGOS.google || '/placeholder.svg'}
                  alt="Google"
                  className="h-6 w-6"
                />

                {/* Google Styled Text */}
                <span className="text-lg font-bold text-gray500 text-center">
                  Sign in with Google
                </span>
              </button>
            </div>
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="text-sm font-medium text-blue600 underline  hover:text-blue-800"
              >
                {isRegister
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Create one"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
