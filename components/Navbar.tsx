import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  getCookie,
  setCookies,
  removeCookies,
  deleteCookie,
} from "cookies-next";
interface NB {
  openSideBar: (boolean) => void;
}

const Navbar = React.forwardRef<HTMLDivElement, NB>(
  ({ openSideBar = null }, ref) => {
    const router = useRouter();
    const defaultLoginStatus = getCookie("auth") ? true : false;
    const [loginStatus, setloginStatus] = useState(defaultLoginStatus);
    const handleSide = () => {
      if (openSideBar !== null) {
        openSideBar(true);
      }
      console.log(ref);
    };
    const handleLogOut = () => {
      deleteCookie("auth");
      router.push("/");
    };
    return (
      <div>
        <div className="navbar sticky top-0 px-5 md:px-10 z-20 bg-base-100">
          <div className="navbar-start">
            {loginStatus && (
              <div
                ref={ref}
                className="btn flex flex-start lg:hidden btn-ghost btn-circle"
                onClick={handleSide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              </div>
            )}
            <a className=" no-animation hidden lg:block normal-case text-xl">
              CCMS
            </a>
          </div>
          {loginStatus && (
            <div className="navbar-mid  lg:hidden">
              <a className=" no-animation normal-case text-xl">CCMS</a>
            </div>
          )}
          <div className="navbar-end">
            <Link href="#">
              <div className="btn mr-4 btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </Link>
            {loginStatus && (
              <button className="btn mr-4 btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    />
                  </svg>

                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            )}
            {loginStatus ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 z-20 rounded-full">
                    <Image
                      alt="icon"
                      width={100}
                      height={100}
                      src="https://placeimg.com/80/80/people"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/login">
                <div className="btn px-16 btn-primary">Login</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
);
Navbar.displayName = "Navbar";
export default Navbar;
