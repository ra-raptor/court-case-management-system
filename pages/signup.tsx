import Link from "next/link";
import React, { useState } from "react";
import AccountDetails from "../components/signupSteps/AccountDetails";
import Documents from "../components/signupSteps/Documents";
import ProfileSetup from "../components/signupSteps/ProfileSetup";
import Verification from "../components/signupSteps/Verification";
import axios from "axios";
import { useRouter } from "next/router";
interface Steps {
  name: String;
  jsx: JSX.Element;
}

interface UserDetails {
  email: string;
  mobile: number;
  accountType: number;
  password: string;
  firstName: string;
  lastName: string;
  dob: Date;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: number;
  profilePicUrl: string;
  identityProofType: number;
  identityProofNumber: number;
  identityProofUrl: string;
  barNo: number;
  barPic: string;
}

const testUserDetails: UserDetails = {
  email: "vikasvks0112@gmail.com",
  mobile: 9113725640,
  accountType: 3,
  password: "",
  firstName: "",
  lastName: "",
  dob: new Date(),
  gender: "MALE",
  address: "",
  city: "",
  state: "",
  pincode: 0,
  profilePicUrl: "",
  identityProofType: 0,
  identityProofNumber: 0,
  identityProofUrl: "",
  barNo: 0,
  barPic: "",
};
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const Signup = () => {
  const [currentStep, setcurrentStep] = useState<number>(0);
  const [confirmpass, setconfirmpass] = useState<string>("");
  const [userDetails, setuserDetails] = useState<UserDetails>(testUserDetails);

  const steps: Array<Steps> = [
    {
      name: "Account",
      jsx: (
        <>
          <AccountDetails
            userDetails={userDetails}
            setuserDetails={setuserDetails}
          />
        </>
      ),
    },
    {
      name: "Verification",
      jsx: (
        <>
          <Verification
            userDetails={userDetails}
            confirmpass={confirmpass}
            setconfirmpass={setconfirmpass}
            setuserDetails={setuserDetails}
          />
        </>
      ),
    },
    {
      name: "Profile",
      jsx: (
        <>
          <ProfileSetup
            userDetails={userDetails}
            setuserDetails={setuserDetails}
          />
        </>
      ),
    },
    {
      name: "Upload Documents",
      jsx: (
        <>
          <Documents
            userDetails={userDetails}
            setuserDetails={setuserDetails}
          />
        </>
      ),
    },
  ];

  const doesEmailExist = async (email) => {};

  const handleStepChange = async (e: String) => {
    if (currentStep === 0) {
      let msg = "";
      if (userDetails.email === "") {
        msg = msg + "Email can't be empty\n";
      } else if (!validateEmail(userDetails.email)) {
        msg = msg + "Email Format Not Correct\n";
      } else {
        await axios
          .get("/api/users/email/", {
            params: {
              email: userDetails.email,
            },
          })
          .then(function (response) {
            if (response.data.data !== 0) {
              msg = msg + "Email already in use\n";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      const len = userDetails.mobile.toString().length;
      if (len < 9) {
        msg = msg + "Mobile No Format Not Correct\n";
      }
      if (msg !== "") {
        window.alert(msg);
        return;
      }
    } else if (currentStep === 1) {
      let msg = "";
      if (userDetails.password === "") {
        msg = msg + "Password cant be empty\n";
      } else if (userDetails.password !== confirmpass) {
        msg = msg + "Passwords do not match\n";
      }
      if (msg !== "") {
        window.alert(msg);
        return;
      }
    } else if (currentStep === 2) {
      let msg = "";
      if (userDetails.firstName === "") {
        msg = msg + "First Name cant be empty\n";
      } else if (userDetails.lastName === "") {
        msg = msg + "Last Name cant be empty\n";
      }
      if (msg !== "") {
        window.alert(msg);
        return;
      }
    }
    if (e === "UP") {
      if (currentStep < steps.length - 1) {
        setcurrentStep(currentStep + 1);
      }
    } else if (e === "DOWN") {
      if (currentStep > 0) {
        setcurrentStep(currentStep - 1);
      }
    }
  };

  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/users/signup", userDetails)
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
    <div
      data-theme="light"
      className="  text-center transition-all flex flex-col justify-center align-center bg-base-200 min-h-screen"
    >
      <h1 className="text-5xl  py-6  font-bold">Signup</h1>
      <Link href="/login">Back to Login</Link>
      <div className="py-6 mb-12 bg-base-200">
        <ul className="transition-all steps w-1/2">
          {steps.map((step, index) => {
            return (
              <li
                key={index}
                className={`step transition-all transition ${
                  index <= currentStep && "step-primary"
                }`}
              >
                {step.name}
              </li>
            );
          })}
        </ul>
      </div>
      {steps[currentStep].jsx}
      <div className="grid place-items-center mb-10 border-white  bg-base-200">
        <div className="flex w-1/2 px-10 mt-6  justify-between">
          <div
            className={`btn btn-outline ${
              currentStep === 0 ? "btn-disabled" : ""
            } `}
            onClick={() => handleStepChange("DOWN")}
          >
            Prev
          </div>
          {currentStep < steps.length - 1 ? (
            <div
              className="btn btn-outline"
              onClick={() => handleStepChange("UP")}
            >
              Next
            </div>
          ) : (
            <Link href="/dashboard">
              <div className="btn btn-primary" onClick={handleSignUp}>
                Submit
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
