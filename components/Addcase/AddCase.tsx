import React, { useState, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import { CaseInterface } from "../../utils/CaseInterface";
const jwt = require("jsonwebtoken");
import axios from "axios";
import { useRouter } from "next/router";
const AddCase = () => {
  const router = useRouter();
  //console.log(getCookie("autha"));
  if (typeof window !== "undefined") {
    // Client-side-only code
    if (!getCookie("auth")) {
      router.push("/dashboard");
    }
  }
  var decoded = jwt.decode(getCookie("auth"));
  console.log(decoded);
  const defaultCase: CaseInterface = {
    courtState: "West Bengal",
    courtType: "High",
    caseNature: "Civil",
    caseType: "Not Urgent",
    complainentName: decoded.firstName,
    complainentEmail: decoded.email,
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
  };

  const [tcase, settcase] = useState<CaseInterface>(defaultCase);

  var decoded = jwt.decode(getCookie("auth"));
  console.log(decoded);

  const close = useRef(null);
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const handleS = () => {
    setsidebarOpen(!sidebarOpen);
  };

  const getGreet = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      return "Good morning";
    } else if (curHr < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tcase.complainentEmail === "") {
      settcase({ ...tcase, complainentEmail: decoded.email });
    }
    if (tcase.causeOfAction === "") {
      window.alert("Please enter the cause of action");
      return;
    }
    await axios
      .post("/api/cases/", tcase)
      .then(function (response) {
        console.log(response);
        router.push("/dashboard");
      })
      .catch(function (error) {
        window.alert("Server Error");
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          closeRef={close}
          setsidebarOpen={setsidebarOpen}
        />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Navbar openSideBar={setsidebarOpen} ref={close} />
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

          <main className="text-center transition-all flex flex-col justify-center  items-center flex-center align-center bg-base-200">
            <h1 className="text-3xl  py-6  font-bold">Add Case</h1>

            <div className="form w-3/4">
              <div>
                <h2 className="text-2xl  py-3 ">Basic Information</h2>
                {/* court name and state and type */}
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">
                        State of Court ( Required ){" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                      value={tcase.courtState}
                      onChange={(e) => {
                        settcase({ ...tcase, courtState: e.target.value });
                      }}
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">
                        Court Type ( Required )
                      </span>
                    </label>
                    <select
                      className="select "
                      value={tcase.courtType}
                      onChange={(e) => {
                        settcase({ ...tcase, courtType: e.target.value });
                      }}
                    >
                      <option disabled selected>
                        Select Type
                      </option>
                      <option>District</option>
                      <option>High</option>
                    </select>
                  </div>
                </div>
                {/* case type and nature */}
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">
                        Case Nature ( Required ){" "}
                      </span>
                    </label>
                    <select
                      className="select "
                      value={tcase.caseNature}
                      onChange={(e) => {
                        settcase({ ...tcase, caseNature: e.target.value });
                      }}
                    >
                      <option disabled selected>
                        Select Nature
                      </option>
                      <option>Civil</option>
                      <option>Criminal</option>
                    </select>
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Case Type ( Required )</span>
                    </label>
                    <select
                      className="select "
                      value={tcase.caseType}
                      onChange={(e) => {
                        settcase({ ...tcase, caseType: e.target.value });
                      }}
                    >
                      <option disabled selected>
                        Select Type
                      </option>
                      <option>Not Urget</option>
                      <option>Urgent</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl  py-6 ">Complainant Information</h2>
                {/* complainant name a */}
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">
                        Full Name ( required ){" "}
                      </span>
                    </label>
                    <input
                      value={tcase.complainentName}
                      onChange={(e) => {
                        settcase({ ...tcase, complainentName: e.target.value });
                      }}
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Email ( Required )</span>
                    </label>
                    <input
                      value={tcase.complainentEmail}
                      onChange={(e) => {
                        settcase({
                          ...tcase,
                          complainentEmail: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Phone ( Required )</span>
                    </label>
                    <input
                      value={tcase.complainentPhone}
                      onChange={(e) => {
                        settcase({
                          ...tcase,
                          complainentPhone: parseInt(e.target.value),
                        });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Date of Birth</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Gender ( Required )</span>
                    </label>
                    <select
                      className="select "
                      value={tcase.complainentGender}
                      onChange={(e) => {
                        settcase({
                          ...tcase,
                          complainentGender: e.target.value,
                        });
                      }}
                    >
                      <option disabled selected>
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                <div className="form-control  mb-6">
                  <label className="label">
                    <span className="label-text">Pin Code </span>
                  </label>
                  <input
                    value={tcase.complainentPin}
                    onChange={(e) => {
                      settcase({ ...tcase, complainentPin: e.target.value });
                    }}
                    type="phone"
                    placeholder="Type here"
                    className="input input-bordered "
                  />
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">City</span>
                    </label>
                    <input
                      value={tcase.complainentCity}
                      onChange={(e) => {
                        settcase({ ...tcase, complainentCity: e.target.value });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">State </span>
                    </label>
                    <input
                      value={tcase.complainentState}
                      onChange={(e) => {
                        settcase({
                          ...tcase,
                          complainentState: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>
                <div className="form-control  mb-6">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    value={tcase.complainentAddress}
                    onChange={(e) => {
                      settcase({
                        ...tcase,
                        complainentAddress: e.target.value,
                      });
                    }}
                    className="textarea textarea-bordered h-24"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
              {/* accused */}
              <div>
                <h2 className="text-2xl  py-6 ">Respondent Information</h2>
                {/* complainant name a */}
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">
                        Full Name ( required ){" "}
                      </span>
                    </label>
                    <input
                      value={tcase.respondentName}
                      onChange={(e) => {
                        settcase({ ...tcase, respondentName: e.target.value });
                      }}
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Email ( Required )</span>
                    </label>
                    <input
                      value={tcase.respondentEmail}
                      onChange={(e) => {
                        settcase({ ...tcase, respondentEmail: e.target.value });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Phone ( Required )</span>
                    </label>
                    <input
                      value={tcase.respondentPhone}
                      onChange={(e) => {
                        settcase({
                          ...tcase,
                          respondentPhone: parseInt(e.target.value),
                        });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Date of Birth</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Gender ( Required )</span>
                    </label>
                    <select
                      className="select "
                      value={tcase.respondentGender}
                      onChange={(e) => {
                        settcase({
                          ...tcase,
                          respondentGender: e.target.value,
                        });
                      }}
                    >
                      <option disabled selected>
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                <div className="form-control  mb-6">
                  <label className="label">
                    <span className="label-text">Pin Code </span>
                  </label>
                  <input
                    value={tcase.respondentPin}
                    onChange={(e) => {
                      settcase({ ...tcase, respondentPin: e.target.value });
                    }}
                    type="phone"
                    placeholder="Type here"
                    className="input input-bordered "
                  />
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">City</span>
                    </label>
                    <input
                      value={tcase.respondentCity}
                      onChange={(e) => {
                        settcase({ ...tcase, respondentCity: e.target.value });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">State </span>
                    </label>
                    <input
                      value={tcase.respondentState}
                      onChange={(e) => {
                        settcase({ ...tcase, respondentState: e.target.value });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>
                <div className="form-control  mb-6">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    value={tcase.respondentAddress}
                    onChange={(e) => {
                      settcase({ ...tcase, respondentAddress: e.target.value });
                    }}
                    className="textarea textarea-bordered h-24"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
              {/* accused end */}
              <div>
                <h2 className="text-2xl  py-6 ">Case Details</h2>
                {/* complainant name a */}
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">
                        Cause Of Action / Subject ( required )
                      </span>
                    </label>
                    <input
                      value={tcase.causeOfAction}
                      onChange={(e) => {
                        settcase({ ...tcase, causeOfAction: e.target.value });
                      }}
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center w-full">
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Date of action</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                  <div className="w-3"></div>
                  <div className="form-control w-full  mb-6">
                    <label className="label">
                      <span className="label-text">Location of action</span>
                    </label>
                    <input
                      value={tcase.locationOfAction}
                      onChange={(e) => {
                        settcase({
                          ...tcase,
                          locationOfAction: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-300 "
                    />
                  </div>
                </div>

                <div className="form-control  mb-6">
                  <label className="label">
                    <span className="label-text">Act Type ( IPC ) </span>
                  </label>
                  <input
                    value={tcase.actType}
                    onChange={(e) => {
                      settcase({ ...tcase, actType: e.target.value });
                    }}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered "
                  />
                </div>

                <div className="form-control  mb-6">
                  <label className="label">
                    <span className="label-text">Describe Case</span>
                  </label>
                  <textarea
                    value={tcase.description}
                    onChange={(e) => {
                      settcase({ ...tcase, description: e.target.value });
                    }}
                    className="textarea textarea-bordered h-24"
                    placeholder="describe"
                  ></textarea>
                </div>
              </div>
              <div
                className="btn btn-primary w-full mb-12"
                onClick={handleSubmit}
              >
                Submit
              </div>
            </div>
          </main>

          {/* <Banner /> */}
        </div>
      </div>
    </div>
  );
};

AddCase.getInitalProps = async (ctx) => {};

export default AddCase;
