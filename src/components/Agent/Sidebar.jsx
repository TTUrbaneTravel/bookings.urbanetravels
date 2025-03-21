import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = (event) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(event.target) ||
        trigger.current.contains(event.target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event) => {
      if (!sidebarOpen || event.key !== 'Escape') return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-baseColor duration-300 
        ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* Sidebar content */}
      {/* Sidebar content */}
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/agent/dashboard' || pathname.includes('/agent/dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 
                          font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            (pathname === '/agent/dashboard' ||
                              pathname.includes('/agent/dashboard')) &&
                            'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                          />
                        </svg>
                        Dashboard
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/agent/dashboard"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              eCommerce
                            </NavLink>
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Support --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/agent/support' || pathname.includes('/agent/support')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                          text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            (pathname === '/agent/support' ||
                              pathname.includes('/agent/support')) &&
                            'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="-5.0 -10.0 110.0 135.0"
                          fill="#fff" //'#DEE4EE'
                          height={30}
                        >
                          <path d="m89 41.152v-0.15234c0-19.852-16.148-36-36-36-11.793 0-22.855 5.7891-29.59 15.488-0.47266 0.67969-0.30469 1.6133 0.37891 2.0859 0.67969 0.47266 1.6133 0.30469 2.0898-0.375 6.1719-8.8906 16.309-14.199 27.121-14.199 18.195 0 33 14.805 33 33h-1.5c-2.4805 0-4.5 2.0195-4.5 4.5v21c0 2.4805 2.0195 4.5 4.5 4.5h1.5078v2.9336c0 0.019531-0.007812 0.042968-0.007812 0.066406 0 8.2695-6.7305 15-15 15h-9.2773c-0.62109-1.7422-2.2695-3-4.2227-3h-6c-2.4805 0-4.5 2.0195-4.5 4.5s2.0195 4.5 4.5 4.5h6c1.9531 0 3.6016-1.2578 4.2227-3h9.2773c9.5859 0 17.426-7.5391 17.949-16.996h0.058593v-4.1562c3.4141-0.69922 5.9922-3.7266 5.9922-7.3477v-15c0-3.6211-2.582-6.6523-6-7.3477zm-31.5 50.848h-6c-0.82812 0-1.5-0.67188-1.5-1.5s0.67188-1.5 1.5-1.5h6c0.82812 0 1.5 0.67188 1.5 1.5s-0.67188 1.5-1.5 1.5zm34.5-28.5c0 2.4805-2.0195 4.5-4.5 4.5h-3c-0.82812 0-1.5-0.67188-1.5-1.5v-21c0-0.82812 0.67188-1.5 1.5-1.5h3c2.4805 0 4.5 2.0195 4.5 4.5z" />
                          <path d="m62 69.5v-30c0-4.1367-3.3633-7.5-7.5-7.5h-42c-4.1367 0-7.5 3.3633-7.5 7.5v30c0 4.1367 3.3633 7.5 7.5 7.5h11.25l8.5508 11.398c0.28906 0.38672 0.73828 0.60156 1.1992 0.60156 0.15625 0 0.31641-0.023438 0.47656-0.078125 0.60938-0.20312 1.0234-0.77734 1.0234-1.4219v-10.5h19.5c4.1367 0 7.5-3.3633 7.5-7.5zm-28.5 4.5c-0.82812 0-1.5 0.67188-1.5 1.5v7.5l-6.3008-8.3984c-0.28125-0.37891-0.73047-0.60156-1.1992-0.60156h-12c-2.4805 0-4.5-2.0195-4.5-4.5v-30c0-2.4805 2.0195-4.5 4.5-4.5h42c2.4805 0 4.5 2.0195 4.5 4.5v30c0 2.4805-2.0195 4.5-4.5 4.5z" />
                          <path d="m41.008 63.504c0 2-3 2-3 0s3-2 3 0" />
                          <path d="m35.008 63.504c0 2-3 2-3 0s3-2 3 0" />
                          <path d="m29.008 63.504c0 2-3 2-3 0s3-2 3 0" />
                          <path d="m23.008 27.004c0 2-3 2-3 0s3-2 3 0" />
                        </svg>
                        Support
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/agent/support/agentCallBackSupport"
                              // className={({ isActive }) =>
                              //   'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                              //   (isActive && '!text-white')
                              // }
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Call Back Support
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/support/importPnr"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Import PNR
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/support/creditRequest"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Credit Request
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/support/escalationMatrix"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Escalation Matrix
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/support/uploadAmount"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Upload Amount
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/support/airlineInformation"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Airline Information
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/support/cancellationPolicy"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Cancellation Policy
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/support/depositUpdate"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Deposit Updates
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Support --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/agent/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                      fill=""
                    />
                  </svg>
                  Calendar
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Services --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/services' || pathname.includes('services')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/services' ||
                            pathname.includes('services')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="white"
                        >
                          <path d="M760-600q-57 0-99-34t-56-86H354q-11 42-41.5 72.5T240-606v251q52 14 86 56t34 99q0 66-47 113T200-40q-66 0-113-47T40-200q0-57 34-99t86-56v-251q-52-14-86-56t-34-98q0-66 47-113t113-47q56 0 98 34t56 86h251q14-52 56-86t99-34q66 0 113 47t47 113q0 66-47 113t-113 47ZM200-120q33 0 56.5-24t23.5-56q0-33-23.5-56.5T200-280q-32 0-56 23.5T120-200q0 32 24 56t56 24Zm0-560q33 0 56.5-23.5T280-760q0-33-23.5-56.5T200-840q-32 0-56 23.5T120-760q0 33 24 56.5t56 23.5ZM760-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T760-40Zm0-80q33 0 56.5-24t23.5-56q0-33-23.5-56.5T760-280q-33 0-56.5 23.5T680-200q0 32 23.5 56t56.5 24Zm0-560q33 0 56.5-23.5T840-760q0-33-23.5-56.5T760-840q-33 0-56.5 23.5T680-760q0 33 23.5 56.5T760-680ZM200-200Zm0-560Zm560 560Zm0-560Z" />
                        </svg>
                        Services
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/services/flights"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Flights
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/visa"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Visa
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/hotels"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Hotels
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/buses"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Buses
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/cards"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Cards
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/trains"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Trains
                            </NavLink>
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Service --> */}

              {/* <!-- Menu Item Admin --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/agent/admin' || pathname.includes('/agent/admin')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/agent/admin' ||
                            pathname.includes('/agent/admin')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                            fill=""
                          />
                          <path
                            d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                            fill=""
                          />
                        </svg>
                        Admin
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/agent/admin/savecards"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Credit/Debit Cards
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/agent/admin/addMarkupAfterBooking"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Add Markup After Booking
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/agent/admin/setMarkup"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Set Markup
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/agent/admin/showCommissionDetails"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Show Commision Details
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/agent/admin/agentProfile"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium 
                                text-bodydark2 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                  pathname.includes('profile') &&
                                  'bg-graydark dark:bg-meta-4'
                                }`}
                            >
                              Profile
                            </NavLink>
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Admin --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
