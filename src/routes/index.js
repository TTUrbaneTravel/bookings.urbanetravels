import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Flights = lazy(() => import('../pages/Flights/Flight'));
const FlightsFilteration = lazy(() => import('../pages/Flights/FlightFilteration'));
const FlightsReviewPage = lazy(()=> import('../pages/Flights/FlightReviewPage'));
const FlightsTravellerUserDetails = lazy(()=> import('../pages/Flights/FlightTravellersUserDetailsPage'));
const FlightsTravellerSeatPage = lazy(()=> import('../pages/Flights/FlightTravellersSeatPage'));
const Visa = lazy(() => import('../pages/Visas/visa'));
const VisaInstruction = lazy(() => import('../components/Visas/instructions'));
const VisaApplication = lazy(() => import('../components/Visas/application'));
const VisaForm = lazy(() => import('../components/Visas/visaform'));
const VisaFormCheckout = lazy(() => import('../pages/Visas/checkout'));

const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/flights',
    title: 'Flights',
    component: Flights,
  },
  {
    path: '/flightsfilteration',
    title: 'FlightsFilteration',
    component: FlightsFilteration,
  },
  {
    path: '/flightreviewpage',
    title: 'FlightsReviewPage',
    component: FlightsReviewPage,
  },
  {
    path: '/flighttravellersuserdetails',
    title: 'FlightsTravellerUserDetails',
    component: FlightsTravellerUserDetails,
  },
  {
    path: '/flighttravellersseatpage',
    title: 'FlightsTravellerSeatPage',
    component: FlightsTravellerSeatPage,
  },
  {
    path: '/visa',
    title: 'Visa',
    component: Visa,
  },
  {
    path: '/instructions/:countryId',
    title: 'Visa Instruction',
    component: VisaInstruction,
  },
  {
    path: '/application/:countryId',
    title: 'Visa Application',
    component: VisaApplication,
  },
  {
    path: '/visaform',
    title: 'Visa Form',
    component: VisaForm,
  },
  {
    path: '/checkout',
    title: 'Visa Form Checkout',
    component: VisaFormCheckout,
  }
];

const routes = [...coreRoutes];
export default routes;
