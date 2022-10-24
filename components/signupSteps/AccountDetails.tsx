import React from "react";

const AccountDetails = () => {
  return (
    <div className=" text-center grid place-items-center">
      <div className=" w-1/2  grow flex flex-col px-10">
        <h1 className="mb-6 text-3xl w-lg  font-bold">Account Details</h1>

        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-300"
          />
        </div>

        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Your Phone Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered "
          />
        </div>
        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Select Account Type</span>
          </label>
          <select className="select ">
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
