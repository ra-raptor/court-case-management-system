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
interface NB {}

const LandingNavbar = React.forwardRef<HTMLDivElement, NB>(() => {
  const router = useRouter();
  const defaultLoginStatus = getCookie("auth") ? true : false;
  const [loginStatus, setloginStatus] = useState(defaultLoginStatus);

  const handleLogOut = () => {
    deleteCookie("auth");
    router.push("/");
  };
  return (
    <div>
      <div className="navbar sticky top-0 px-5 md:px-10 z-20 bg-base-100">
        <div className="navbar-start">
          <Link href="/">
            <span className=" cursor-pointer no-animation hidden lg:block normal-case text-xl">
              CCMS
            </span>
          </Link>
        </div>
        {loginStatus && (
          <div className="navbar-mid  lg:hidden">
            <a className=" no-animation normal-case text-xl">CCMS</a>
          </div>
        )}
        <div className="navbar-end">
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
                {/* <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li> */}
                <li className="border border-black-50" onClick={handleLogOut}>
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
});
LandingNavbar.displayName = "Navbar";
export default LandingNavbar;
