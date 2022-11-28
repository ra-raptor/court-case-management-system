import React from "react";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import { getCookie, setCookies, removeCookies } from "cookies-next";
const DashboardW = () => {
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
      <Dashboard />
    </div>
  );
};

export default DashboardW;
