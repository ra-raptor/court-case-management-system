import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function SidebarLinkGroup({
  sidebarExpanded,
  setsidebarExpanded,
  svg,
  title,
  items,
  conditionQuery,
}) {
  const router = useRouter();
  const activecondition = router.pathname.includes(conditionQuery);
  const [open, setOpen] = useState(activecondition);

  const handleClick = (e) => {
    e.preventDefault();
    if (!sidebarExpanded) {
      setsidebarExpanded(true);
      setOpen(true);
    } else setOpen(!open);
  };

  const createListItem = (item) => {
    return (
      <li
        key={item.name}
        className={`mb-1 transition duration-1000  last:mb-0 cursor-pointer ${
          router.pathname.includes(item.url) ? "text-info" : "text-slate-500"
        }`}
      >
        <Link href={item.url}>
          <span className="text-sm font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
            {/* lg:opacity-0  */}
            {item.name}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <li
      className={`px-3 py-2 overflow-x-hidden transition-all duration-1000 delay-700 ease-in-out rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-slate-900"
      }`}
    >
      <div
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <div className="flex text-slate-200 hover:text-white truncate transition duration-150 items-center justify-between">
          <div className="flex cursor-pointer items-center">
            {svg}
            <span className="text-sm font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {title}
              {/* lg:opacity-0 */}
            </span>
          </div>
          {/* Carot Icon */}
          <div className=" cursor-pointer flex shrink-0 ml-2">
            <svg
              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                open && "rotate-180"
              }`}
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </div>
      {/* {list} */}
      <div className=" lg:sidebar-expanded:block 2xl:block">
        {/* lg:hidden */}
        <ul
          className={`pl-9 transition-all duration-1000  mt-1 ${
            !open && "hidden"
          } ${!sidebarExpanded && "hidden"}`}
        >
          {items.map((item) => createListItem(item))}
        </ul>
      </div>
    </li>
  );
}

export default SidebarLinkGroup;
