import React, { useRef, useEffect, useState } from "react";

const Sidebar = ({ sidebarOpen, setsidebarOpen }) => {
  const sidebarRef = useRef();
  console.log(sidebarOpen);
  const [sidebarExpanded, setsidebarExpanded] = useState(false);

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
        ref={sidebarRef}
      >
        <div
          className="btn"
          onClick={() => setsidebarExpanded(!sidebarExpanded)}
        >
          E
        </div>
        <div className="btn" onClick={() => setsidebarOpen(!sidebarOpen)}>
          C
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
