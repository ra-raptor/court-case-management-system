import React, { useState } from "react";
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const AccountDetails = ({ userDetails, setuserDetails }) => {
  const emailHandler = (e) => {
    setuserDetails({ ...userDetails, email: e.target.value });
    if (!validateEmail(e.target.value)) {
      seterrorEmail(true);
    } else {
      seterrorEmail(false);
    }
  };
  const mobileHandler = (e) => {
    setuserDetails({ ...userDetails, mobile: e.target.value });
    if (userDetails.mobile === 0) {
      seterrorEmail(true);
    } else {
      seterrorEmail(false);
    }
  };
  const accountTypeHandler = (e) => {
    setuserDetails({ ...userDetails, accountType: e.target.value });
  };
  const [errorEmail, seterrorEmail] = useState(false);
  const [errorMobile, seterrorMobile] = useState(false);
  return (
    <div className=" text-center grid place-items-center">
      <div className="w-3/4 md:w-1/2  grow flex flex-col px-4 md:px-10">
        <h1 className="mb-6 text-3xl w-lg  font-bold">Account Details</h1>

        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Your Email ( required )</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            value={userDetails.email}
            onChange={emailHandler}
            autoComplete="true"
            className={`input input-bordered w-300 ${
              errorEmail ? "input-error" : ""
            }`}
          />
        </div>

        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Your Phone Number ( required )</span>
          </label>
          <input
            type="phone"
            value={userDetails.mobile}
            onChange={mobileHandler}
            placeholder="Type here"
            className={`input input-bordered w-300 ${
              errorMobile ? "input-error" : ""
            }`}
          />
        </div>
        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Select Account Type ( required )</span>
          </label>
          <select
            className="select "
            value={userDetails.accountType}
            onChange={accountTypeHandler}
          >
            <option disabled selected>
              Select Account Type
            </option>
            <option>Party in person</option>
            <option>Laywer</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
