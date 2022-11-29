import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../components/Navbar";
import LandingNavbar from "../../components/LandingNavBar";
import Link from "next/link";
import { CaseInterface } from "../../utils/CaseInterface";
import Footer from "../../components/Footer";
const CaseView = (props) => {
  const [mycase, setMyCase] = useState<CaseInterface>({
    courtState: "West Bengal",
    courtType: "High",
    caseNature: "Civil",
    caseType: "Not Urgent",
    complainentName: "",
    complainentEmail: "",
    complainentPhone: 0,
    complainentDOB: new Date(),
    complainentGender: "MALE",
    complainentPin: "",
    complainentCity: "Kolkata",
    complainentState: "West Bengal",
    complainentAddress: "Sector-V, Salt Lake, Kolkata-700091, WB",
    respondentName: "",
    respondentEmail: "",
    respondentPhone: 0,
    respondentDOB: new Date(),
    respondentGender: "MALE",
    respondentPin: "",
    respondentCity: "Kolkata",
    respondentState: "West Bengal",
    respondentAddress: "sector-V, Salt Lake, Kolkata-700091, WB",
    causeOfAction: "",
    dateOfAction: new Date(),
    locationOfAction: "",
    actType: "",
    description: "",
  });
  useEffect(() => {
    axios
      .get("/api/cases/id", {
        params: { id: props.id },
      })
      .then((res) => {
        console.log(res.data.data);
        setMyCase(res.data.data);
      });
  }, [props.id]);

  return (
    <>
      <div
        data-theme="light"
        className="bg-white flex flex-center justify-center  font-sans leading-normal tracking-normal"
      >
        <div className="w-3/4">
          <LandingNavbar />

          {/* <!--Container--> */}
          <div className="container w-full md:max-w-3xl mx-auto pt-20">
            <div
              className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
              style={{ fontFamily: "Georgia,serif" }}
            >
              {/* <!--Title--> */}
              <div className="font-sans">
                <p className="text-base md:text-sm text-blue-700 font-bold">
                  &lt;{" "}
                  <Link
                    href="/dashboard"
                    className="text-base md:text-sm  text-blue-700 font-bold no-underline hover:underline"
                  >
                    Back to Dashboard
                  </Link>
                </p>
                <h1 className="font-bold font-sans break-normal mb-4 text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                  {mycase.causeOfAction}
                </h1>

                <p className="text-sm md:text-base font-normal text-gray-600">
                  regeistered at{" "}
                  <span className="font-bold">{mycase.courtType}</span> Court of{" "}
                  <span className="font-bold">{mycase.courtState}</span>
                </p>
                <p className="text-sm py-2 md:text-base font-normal text-gray-600">
                  {mycase.caseNature} Case and {mycase.caseType}
                </p>
              </div>

              {/* <!--Post Content--> */}
              <hr className="border-b-2 my-5 border-gray-400 " />
              {/* <!--Lead Para--> */}
              <p className="pt-6 pb-3">Case Description : </p>

              {mycase.actType === "" ? (
                ""
              ) : (
                <p className="py3 text-base">{mycase.actType}</p>
              )}

              <p className="py3 text-base">
                {mycase.description === ""
                  ? "No Description Available "
                  : mycase.description}
              </p>

              <hr className="border-b-2 my-5 border-gray-400 " />

              <p className="pt-6 pb-3">Complainent Information : </p>
              <p className="py3 text-base">
                {mycase.complainentName === ""
                  ? "Unknown Person"
                  : mycase.complainentName}{" "}
                ( Gender :{" "}
                {mycase.complainentGender === ""
                  ? "Not Known"
                  : mycase.complainentGender}{" "}
                )
              </p>
              <p className="py3  mt-2  text-base">Contacts :</p>
              <p className="py3 text-base">
                Email :{" "}
                {mycase.complainentEmail === ""
                  ? "N/A"
                  : mycase.complainentEmail}{" "}
                | Phone :{" "}
                {mycase.complainentPhone === 0
                  ? "N/A"
                  : mycase.complainentPhone}{" "}
              </p>

              <p className="py3  mt-3  text-base">DOB :</p>
              <p className="py3 text-base">
                {mycase.complainentDOB === null
                  ? "N/A"
                  : "mycase.complainentDOB"}
              </p>

              <p className="py3  mt-3  text-base">Address :</p>
              <p className="py3 text-base">
                {mycase.complainentAddress === ""
                  ? "Full address unknown"
                  : mycase.complainentAddress}{" "}
                <br />
                {mycase.complainentCity === ""
                  ? "N/A"
                  : mycase.complainentCity}{" "}
                ,{" "}
                {mycase.complainentState === ""
                  ? "N/A"
                  : mycase.complainentState}{" "}
                ( {mycase.respondentPin === "" ? "N/A" : mycase.respondentPin} )
              </p>
              {/* <!--/ Post Content--> */}
              <hr className="border-b-2 my-5 border-gray-400 " />

              <p className="pt-6 pb-3">Respondent Information : </p>
              <p className="py3 text-base">
                {mycase.respondentName === ""
                  ? "Unknown Person"
                  : mycase.respondentName}{" "}
                ( Gender :{" "}
                {mycase.respondentGender === ""
                  ? "Not Known"
                  : mycase.respondentGender}{" "}
                )
              </p>
              <p className="py3  mt-2  text-base">Contacts :</p>
              <p className="py3 text-base">
                Email :{" "}
                {mycase.respondentEmail === "" ? "N/A" : mycase.respondentEmail}{" "}
                | Phone :{" "}
                {mycase.respondentPhone === 0 ? "N/A" : mycase.respondentPhone}{" "}
              </p>

              <p className="py3  mt-3  text-base">DOB :</p>
              <p className="py3 text-base">
                {mycase.respondentDOB === null
                  ? "N/A"
                  : "mycase.complainentDOB"}
              </p>

              <p className="py3  mt-3  text-base">Address :</p>
              <p className="py3 text-base">
                {mycase.respondentAddress === ""
                  ? "Full address unknown"
                  : mycase.respondentAddress}{" "}
                <br />
                {mycase.respondentCity === ""
                  ? "N/A"
                  : mycase.respondentCity} ,{" "}
                {mycase.respondentState === "" ? "N/A" : mycase.respondentState}{" "}
                ( {mycase.respondentPin === "" ? "N/A" : mycase.respondentPin} )
              </p>
              <p className="mb-10"></p>
            </div>

            {/* <!--/container--> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  return { props: { id: id } };
}

export default CaseView;
