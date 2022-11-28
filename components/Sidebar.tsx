import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
const jwt = require("jsonwebtoken");
import SidebarLinkGroup from "./SidebarGroup";
import { useRouter } from "next/router";
const Sidebar = ({ sidebarOpen, setsidebarOpen, closeRef }) => {
  const sidebar = useRef(null);
  const trigger = useRef(null);
  const [sidebarExpanded, setsidebarExpanded] = useState(false);
  const router = useRouter();
  const [userType, setUserType] = useState(3);
  //   useEffect(() => {
  //     if (sidebarOpen) {
  //       if (
  //         typeof window !== "undefined" &&
  //         sidebarRef !== undefined &&
  //         sidebarRef.current !== undefined
  //       )
  //         sidebarRef.current.classList.add("hidden");
  //     } else {
  //     }
  //   }, [sidebarOpen]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      var decoded = {
        firstName: "",
        userType: 3,
        email: "",
      };
      decoded = jwt.decode(getCookie("auth"));
      setUserType(decoded?.userType);
      if (window.innerWidth > 1080) {
        setsidebarExpanded(true);
      }
    }
  }, []);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setsidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (typeof window !== "undefined" && window.innerWidth > 1024) return;
      if (!sidebar.current || !trigger.current || !closeRef.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target) ||
        closeRef.current.contains(target)
      )
        return;
      setsidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  const svgadd = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        className={` text-slate-400 ${
          router.pathname.includes("add") && "text-indigo-300"
        }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const svgDash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        className={` text-slate-400 ${
          router.pathname.includes("dashboard") && "text-indigo-300"
        }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
      />
    </svg>
  );

  const svgCal = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        className={` text-slate-400 ${
          router.pathname.includes("calender") && "text-indigo-300"
        }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
      />
    </svg>
  );

  return (
    <div className={`sidebar-wrapper`}>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>
      <div
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-none lg:overflow-y-auto no-scrollbar ${
          sidebarExpanded ? "w-64" : "w-20"
        }  shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
        ref={sidebar}
      >
        <div className="flex flex-col justify-between mb-10 sm:px-2">
          {/* Close button */}
          <div className={`flex pb-4 transition ease-in-out flex-row-reverse `}>
            <button
              ref={trigger}
              className="lg:hidden  text-slate-500 hover:text-slate-400"
              onClick={() => setsidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          {/* logo */}
          <div className="px-1">
            <Link href="/" className="block">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <defs>
                  <linearGradient
                    x1="28.538%"
                    y1="20.229%"
                    x2="100%"
                    y2="108.156%"
                    id="logo-a"
                  >
                    <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                    <stop stopColor="#A5B4FC" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="88.638%"
                    y1="29.267%"
                    x2="22.42%"
                    y2="100%"
                    id="logo-b"
                  >
                    <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                    <stop stopColor="#38BDF8" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="#6366F1" width="32" height="32" rx="16" />
                <path
                  d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                  fill="#4F46E5"
                />
                <path
                  d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                  fill="url(#logo-a)"
                />
                <path
                  d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                  fill="url(#logo-b)"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className=" lg:block lg:sidebar-expanded:hidden  text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              {/* <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span> */}
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup
                sidebarExpanded={sidebarExpanded}
                setsidebarExpanded={setsidebarExpanded}
                svg={svgDash}
                title="Dashboard"
                conditionQuery="dashboard"
                items={[{ name: "Main", url: "/dashboard" }]}
              />
              {userType !== 0 && (
                <SidebarLinkGroup
                  sidebarExpanded={sidebarExpanded}
                  setsidebarExpanded={setsidebarExpanded}
                  conditionQuery="addcase"
                  items={[{ name: "New Case", url: "/addcase" }]}
                  svg={svgadd}
                  title="Add"
                />
              )}

              {/* <SidebarLinkGroup
                sidebarExpanded={sidebarExpanded}
                setsidebarExpanded={setsidebarExpanded}
                conditionQuery="calender"
                items={[{ name: "My Calender", url: "/calender" }]}
                svg={svgCal}
                title="Calender"
              /> */}
            </ul>
          </div>
          {/* More group */}
        </div>

        {/* expand */}
        {/* Expand / collapse button */}
        <div className="pt-3 inline-flex  justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setsidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              {!sidebarExpanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
