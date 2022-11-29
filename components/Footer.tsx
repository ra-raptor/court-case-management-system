import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sticky top-[100vh]    shadow md:px-6 md:py-8 bg-slate-800">
      <div className="sm:flex text-center px-3 md:px-10  sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex cursor-pointer items-center mb-4 sm:mb-0"
        >
          <span className="self-cente text-center cursor-pointer text-2xl font-semibold whitespace-nowrap dark:text-white">
            CCMS
          </span>
        </Link>
        <span className="block text-sm text-gray-500 text-center sm:text-center dark:text-gray-400">
          &copy; All Rights Reserved.
        </span>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
        Made by Vikas Kr Saw.
      </span>
    </footer>
  );
};

export default Footer;
