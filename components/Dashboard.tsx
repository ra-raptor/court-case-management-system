import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const close = useRef(null);
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const handleS = () => {
    setsidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          closeRef={close}
          setsidebarOpen={setsidebarOpen}
        />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Navbar />
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

          <main>
            <div className="btn px-3 hidden" ref={close} onClick={handleS}>
              OPEN
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
                {/* Background illustration */}
                <div
                  className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
                  aria-hidden="true"
                >
                  <svg
                    width="319"
                    height="198"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
                      <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
                      <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="welcome-b"
                      >
                        <stop stopColor="#A5B4FC" offset="0%" />
                        <stop stopColor="#818CF8" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="24.537%"
                        x2="50%"
                        y2="100%"
                        id="welcome-c"
                      >
                        <stop stopColor="#4338CA" offset="0%" />
                        <stop
                          stopColor="#6366F1"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g transform="rotate(64 36.592 105.604)">
                        <mask id="welcome-d" fill="#fff">
                          <use xlinkHref="#welcome-a" />
                        </mask>
                        <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
                        <path
                          fill="url(#welcome-c)"
                          mask="url(#welcome-d)"
                          d="M64-24h80v152H64z"
                        />
                      </g>
                      <g transform="rotate(-51 91.324 -105.372)">
                        <mask id="welcome-f" fill="#fff">
                          <use xlinkHref="#welcome-e" />
                        </mask>
                        <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
                        <path
                          fill="url(#welcome-c)"
                          mask="url(#welcome-f)"
                          d="M40.333-15.147h50v95h-50z"
                        />
                      </g>
                      <g transform="rotate(44 61.546 392.623)">
                        <mask id="welcome-h" fill="#fff">
                          <use xlinkHref="#welcome-g" />
                        </mask>
                        <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
                        <path
                          fill="url(#welcome-c)"
                          mask="url(#welcome-h)"
                          d="M40.333-15.147h50v95h-50z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                {/* Content */}
                <div className="relative">
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
                    Good afternoon, Mr Vikas Kr Saw 👋
                  </h1>
                  <p>Here is what’s happening today:</p>
                </div>
              </div>
              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Avatars */}

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                  {/* Filter button */}
                  {/* Datepicker built with flatpickr */}
                  {/* <Datepicker /> */}
                  {/* Add view button */}
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg
                      className="w-4 h-4 fill-current opacity-50 shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                  </button>
                </div>
              </div>
              {/* card 12 */}
              <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-800">
                    Recent Activity
                  </h2>
                </header>
                <div className="p-3">
                  {/* Card content */}
                  {/* "Today" group */}
                  <div>
                    <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
                      Today
                    </header>
                    <ul className="my-1">
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-indigo-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Nick Mark
                              </a>{" "}
                              mentioned{" "}
                              <a
                                className="font-medium text-slate-800"
                                href="#0"
                              >
                                Sara Smith
                              </a>{" "}
                              in a new post
                            </div>
                            <div className="shrink-0 self-end ml-2">
                              <a
                                className="font-medium text-indigo-500 hover:text-indigo-600"
                                href="#0"
                              >
                                View
                                <span className="hidden sm:inline"> -&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-rose-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              The post{" "}
                              <a
                                className="font-medium text-slate-800"
                                href="#0"
                              >
                                Post Name
                              </a>{" "}
                              was removed by{" "}
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Nick Mark
                              </a>
                            </div>
                            <div className="shrink-0 self-end ml-2">
                              <a
                                className="font-medium text-indigo-500 hover:text-indigo-600"
                                href="#0"
                              >
                                View
                                <span className="hidden sm:inline"> -&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-green-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Patrick Sullivan
                              </a>{" "}
                              published a new{" "}
                              <a
                                className="font-medium text-slate-800"
                                href="#0"
                              >
                                post
                              </a>
                            </div>
                            <div className="shrink-0 self-end ml-2">
                              <a
                                className="font-medium text-indigo-500 hover:text-indigo-600"
                                href="#0"
                              >
                                View
                                <span className="hidden sm:inline"> -&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* "Yesterday" group */}
                  <div>
                    <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
                      Yesterday
                    </header>
                    <ul className="my-1">
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-sky-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                240+
                              </a>{" "}
                              users have subscribed to{" "}
                              <a
                                className="font-medium text-slate-800"
                                href="#0"
                              >
                                Newsletter #1
                              </a>
                            </div>
                            <div className="shrink-0 self-end ml-2">
                              <a
                                className="font-medium text-indigo-500 hover:text-indigo-600"
                                href="#0"
                              >
                                View
                                <span className="hidden sm:inline"> -&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-indigo-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              The post{" "}
                              <a
                                className="font-medium text-slate-800"
                                href="#0"
                              >
                                Post Name
                              </a>{" "}
                              was suspended by{" "}
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Nick Mark
                              </a>
                            </div>
                            <div className="shrink-0 self-end ml-2">
                              <a
                                className="font-medium text-indigo-500 hover:text-indigo-600"
                                href="#0"
                              >
                                View
                                <span className="hidden sm:inline"> -&gt;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* card 13 */}
              <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-800">
                    Income/Expenses
                  </h2>
                </header>
                <div className="p-3">
                  {/* Card content */}
                  {/* "Today" group */}
                  <div>
                    <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
                      Today
                    </header>
                    <ul className="my-1">
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-rose-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Qonto
                              </a>{" "}
                              billing
                            </div>
                            <div className="shrink-0 self-start ml-2">
                              <span className="font-medium text-slate-800">
                                -$49.88
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-green-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Cruip.com
                              </a>{" "}
                              Market Ltd 70 Wilson St London
                            </div>
                            <div className="shrink-0 self-start ml-2">
                              <span className="font-medium text-green-500">
                                +249.88
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-green-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Notion Labs Inc
                              </a>
                            </div>
                            <div className="shrink-0 self-start ml-2">
                              <span className="font-medium text-green-500">
                                +99.99
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-green-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                Market Cap Ltd
                              </a>
                            </div>
                            <div className="shrink-0 self-start ml-2">
                              <span className="font-medium text-green-500">
                                +1,200.88
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-slate-200 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-slate-400"
                            viewBox="0 0 36 36"
                          >
                            <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                App.com
                              </a>{" "}
                              Market Ltd 70 Wilson St London
                            </div>
                            <div className="shrink-0 self-start ml-2">
                              <span className="font-medium text-slate-800 line-through">
                                +$99.99
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Item */}
                      <li className="flex px-2">
                        <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                          <svg
                            className="w-9 h-9 fill-current text-rose-50"
                            viewBox="0 0 36 36"
                          >
                            <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                          </svg>
                        </div>
                        <div className="grow flex items-center text-sm py-2">
                          <div className="grow flex justify-between">
                            <div className="self-center">
                              <a
                                className="font-medium text-slate-800 hover:text-slate-900"
                                href="#0"
                              >
                                App.com
                              </a>{" "}
                              Market Ltd 70 Wilson St London
                            </div>
                            <div className="shrink-0 self-start ml-2">
                              <span className="font-medium text-slate-800">
                                -$49.88
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6"></div>
            </div>
          </main>

          {/* <Banner /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
