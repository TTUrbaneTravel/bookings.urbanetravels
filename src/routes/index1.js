import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const Calendar = lazy(() => import('../pages/Calendar'));
const Profile = lazy(() => import('../components/Agent/Profile'));
const Home = lazy(() => import('../pages/Home'));
const AgentCallBackSupport = lazy(() => import('../components/Agent/Support/Agent-Call-Back-Support'));
const ImportPNR = lazy(() => import('../components/Agent/Support/Import-pnr'));
const CreditRequest = lazy(() => import('../components/Agent/Support/Credit-Request'));
const EscalationMatrix = lazy(() => import('../components/Agent/Support/Escalation-matrix'));
const UploadAmount = lazy(() => import('../components/Agent/Support/Upload-Amount'));
const AirlineInformation = lazy(() => import('../components/Agent/Support/Airline-Information'));
const CancellationPolicy = lazy(() => import('../components/Agent/Support/Cancellation-policy'));
const DepositUpdate = lazy(() => import('../components/Agent/Support/Deposit-Update'));
const CreditDebitCard = lazy(() => import('../components/Agent/Admin/Credit-debit-cards'));
const AddMarkupAfterBooking = lazy(() => import('../components/Agent/Admin/Add-markup-after-booking'));
const SetMarkup = lazy(() => import('../components/Agent/Admin/Set-Markup'));
const CommissionDetails = lazy(() => import('../components/Agent/Admin/Commission-details'));
const AgentProfile = lazy(() => import('../components/Agent/Profile'));
const Dashboard = lazy(() => import('../pages/Dashboard/ECommerce'));

const coreRoutes = [
  {
    path: '/agent/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/agent/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/agent/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/agent/support/agentCallBackSupport',
    title: 'Agent Call Back Support',
    component: AgentCallBackSupport,
  },
  {
    path: '/agent/support/importPnr',
    title: 'Import PNR',
    component: ImportPNR,
  },
  {
    path: '/agent/support/creditRequest',
    title: 'Credit Request',
    component: CreditRequest,
  },
  {
    path: '/agent/support/escalationMatrix',
    title: 'Escalation Matrix',
    component: EscalationMatrix,
  },
  {
    path: '/agent/support/uploadAmount',
    title: 'Upload Amount',
    component: UploadAmount,
  },
  {
    path: '/agent/support/airlineInformation',
    title: 'Airline Information',
    component: AirlineInformation,
  },
  {
    path: '/agent/support/cancellationPolicy',
    title: 'Cancellation Policy',
    component: CancellationPolicy,
  },
  {
    path: '/agent/support/depositUpdate',
    title: 'Deposit Update',
    component: DepositUpdate,
  },
  {
    path: '/agent/admin/savecards',
    title: 'Credit/Debit Card',
    component: CreditDebitCard,
  },
  {
    path: '/agent/admin/addMarkupAfterBooking',
    title: 'Add Markup After Booking',
    component: AddMarkupAfterBooking,
  },
  {
    path: '/agent/admin/setMarkup',
    title: 'Set Markup',
    component: SetMarkup,
  },
  {
    path: '/agent/admin/showCommissionDetails',
    title: 'Show Commission Details',
    component: CommissionDetails,
  },
  {
    path: '/agent/admin/agentProfile',
    title: 'Agent Profile',
    component: AgentProfile,
  },
];

const routes = [...coreRoutes];
export default routes;
