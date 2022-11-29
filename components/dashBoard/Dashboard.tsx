import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
const jwt = require("jsonwebtoken");
import { welcomesvg } from "./welcomesvg";
import { CaseInterface } from "../../utils/CaseInterface";
import axios from "axios";
import TableItem from "./TableItem";
import Footer from "../Footer";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [userType, setUserType] = useState(3);
  const [email, setEmail] = useState("");
  const close = useRef(null);
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [caseListA, setCaseListA] = useState<Array<CaseInterface>>([]);
  const [caseListB, setCaseListB] = useState<Array<CaseInterface>>([]);
  const [caseListAll, setCaseListAll] = useState<Array<CaseInterface>>([]);
  const handleS = () => {
    setsidebarOpen(!sidebarOpen);
  };
  useEffect(() => {
    var decoded = {
      firstName: "",
      userType: 3,
      email: "",
    };
    decoded = jwt.decode(getCookie("auth"));
    setFirstName(decoded?.firstName);
    setEmail(decoded?.email);
    setUserType(decoded?.userType);
    axios
      .get("/api/cases/paintiff", {
        params: { complainentEmail: decoded?.email },
      })
      .then((res) => {
        console.log(res.data.data);
        setCaseListA(res.data.data);
      });
    axios
      .get("/api/cases/accused", {
        params: { respondentEmail: decoded?.email },
      })
      .then((res) => {
        //console.log(res.data.data);
        setCaseListB(res.data.data);
      });
    axios.get("/api/cases/").then((res) => {
      //console.log(res.data.data);
      //console.log(res.data.data);

      setCaseListAll(res.data.data);
    });
  }, []);

  const getGreet = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      return "Good morning";
    } else if (curHr < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
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
          <Navbar openSideBar={setsidebarOpen} ref={close} />
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

          <main>
            {/* <div className="btn px-3 " ref={close} onClick={handleS}>
              OPEN
            </div> */}
            <div className="px-4 sm:px-6 z-10 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
                {/* Background illustration */}
                <div
                  className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
                  aria-hidden="true"
                >
                  {welcomesvg}
                </div>

                {/* Content */}
                <div className="relative">
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
                    {getGreet()}, {firstName || ""} {userType || ""} 👋
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
                  {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg
                      className="w-4 h-4 fill-current opacity-50 shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                  </button> */}
                </div>
              </div>
              {/* card 12 */}
              {userType === 3 || userType === 2 ? (
                <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                  <header className="px-5 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">
                      Cases Linked to you
                    </h2>
                  </header>
                  <div className="p-3">
                    {/* Card content */}
                    {/* "Today" group */}
                    <div>
                      <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
                        Plaintiff
                      </header>
                      <ul className="my-1">
                        {/* Item */}
                        {caseListA.length === 0 ? (
                          <p className="my-3 mx-3">No Cases</p>
                        ) : (
                          caseListA.map((item, index) => {
                            return (
                              <TableItem
                                key={item.causeOfAction}
                                props={item}
                              />
                            );
                          })
                        )}
                      </ul>
                    </div>
                    {/* "Yesterday" group */}
                    <div>
                      <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
                        Accused
                      </header>
                      <ul className="my-1">
                        {/* Item */}
                        {caseListB.length === 0 ? (
                          <p className="my-3 mx-3">No Cases</p>
                        ) : (
                          caseListB.map((item, index) => {
                            return (
                              <TableItem
                                key={item.causeOfAction}
                                props={item}
                              />
                            );
                          })
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                  <header className="px-5 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">All Cases</h2>
                  </header>
                  <div className="p-3">
                    <ul className="my-1">
                      {/* Item */}
                      {caseListAll.length === 0 ? (
                        <p className="my-3 mx-3">No Cases</p>
                      ) : (
                        caseListAll.map((item, index) => {
                          return (
                            <TableItem
                              key={item.causeOfAction}
                              props={item}
                              showDelete={true}
                            />
                          );
                        })
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* card 13 */}

              {/* Cards */}
              <div className="grid grid-cols-12 gap-6"></div>
            </div>
          </main>

          {/* <Banner /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
