import React from "react";

import { useRouter } from "next/router";
import { getCookie, setCookies, removeCookies } from "cookies-next";
import AddCase from "../components/Addcase/AddCase";
const Addcase = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    // Client-side-only code
    if (!getCookie("auth")) {
      router.push("/");
    }
  }
  //console.log(getCookie("autha"));

  return (
    <div data-theme="light">
      <AddCase />
    </div>
  );
};

export default Addcase;
