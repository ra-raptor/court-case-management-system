import React from "react";
import Dashboard from "../components/dashBoard/Dashboard";
import { useRouter } from "next/router";
import { getCookie, setCookies, removeCookies } from "cookies-next";
const jwt = require("jsonwebtoken");
import axios from "axios";
const DashboardW = (z) => {
  console.log(z.cases);

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
DashboardW.getInitalProps = async (ctx) => {
  const cookie = ctx.req?.headers.cookie;

  // const z = await axios.post("http://localhost:3000/api/cases/paintiff/", {
  //   params: { complainentEmail: getCookie("auth") },
  // });
  // // const z = await fetch(
  // //   "http://localhost:3000/api/cases/paintiff/test1@gmail.com",
  // //   {
  // //     headers: {
  // //       cookie: cookie!,
  // //     },
  // //   }
  // // );
  // console.log(getCookie("auth"));

  // const json = await z.data;
  const decoded = jwt.decode(getCookie("auth"));
  return { cases: decoded };
};
export default DashboardW;
