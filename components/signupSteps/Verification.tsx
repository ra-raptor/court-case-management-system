import React, { useState } from "react";

const Verification = ({
  userDetails,
  setuserDetails,
  confirmpass,
  setconfirmpass,
}) => {
  const [hidden, sethidden] = useState(true);

  const svg = hidden ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );

  const pass1Handler = (e) => {
    setuserDetails({ ...userDetails, password: e.target.value });
  };
  const barHandler = (e) => {
    setuserDetails({ ...userDetails, barNo: e.target.value });
  };
  const handleConfirm = (e) => {
    setconfirmpass(e.target.value);
  };
  return (
    <div className=" text-center grid place-items-center">
      <div className="w-3/4 md:w-1/2   grow flex flex-col px-4 md:px-10">
        <h1 className="mb-6 text-3xl w-lg  font-bold">Verification</h1>

        <div className="form-control w-300  mb-6">
          <label className="label">
            <span className="label-text">Password ( required )</span>
          </label>
          <div className="input-group w-300">
            <input
              type={hidden ? "password" : "text"}
              placeholder="Type here"
              value={userDetails.password}
              onChange={pass1Handler}
              className="input input-bordered w-300 grow"
            />
            <button
              className="btn btn-outline"
              onClick={() => sethidden(!hidden)}
            >
              {svg}
            </button>
          </div>
        </div>

        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Confirm Password ( required )</span>
          </label>
          <input
            type="password"
            onChange={handleConfirm}
            value={confirmpass}
            placeholder="Type here"
            className="input input-bordered "
          />
        </div>
        {userDetails.accountType === "Laywer" && (
          <div className="form-control  mb-6">
            <label className="label">
              <span className="label-text">BAR No</span>
            </label>
            <input
              value={userDetails.barNo}
              onChange={barHandler}
              type="phone"
              placeholder="Type here"
              className="input input-bordered "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;
