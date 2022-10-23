import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar sticky top-0   bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost no-animation normal-case text-xl">CCMS</a>
        </div>
        <div className="navbar-end">
          <Link href="/login">
            <div className="btn px-16 btn-primary">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
