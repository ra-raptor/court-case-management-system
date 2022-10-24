import React, { useState } from "react";
import AccountDetails from "../components/signupSteps/AccountDetails";
import Documents from "../components/signupSteps/Documents";
import ProfileSetup from "../components/signupSteps/ProfileSetup";
import Verification from "../components/signupSteps/Verification";
interface Steps {
  name: String;
  jsx: JSX.Element;
}
const steps: Array<Steps> = [
  {
    name: "Account",
    jsx: (
      <>
        <AccountDetails />
      </>
    ),
  },
  {
    name: "Verification",
    jsx: (
      <>
        <Verification />
      </>
    ),
  },
  {
    name: "Profile",
    jsx: (
      <>
        <ProfileSetup />
      </>
    ),
  },
  {
    name: "Upload Documents",
    jsx: (
      <>
        <Documents />
      </>
    ),
  },
];

const Signup = () => {
  const [currentStep, setcurrentStep] = useState<number>(0);
  const handleStepChange = (e: String) => {
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
  const createCurrentStep = () => {};

  return (
    <div className=" text-center transition-all flex flex-col justify-center align-center bg-base-200 min-h-screen">
      <h1 className="text-5xl  py-6  font-bold">Signup</h1>
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
            <div className="btn btn-primary">Submit</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
