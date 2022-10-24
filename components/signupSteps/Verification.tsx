import React from "react";

const Verification = () => {
  return (
    <div className=" text-center grid place-items-center">
      <div className=" w-1/2  grow flex flex-col px-10">
        <h1 className="mb-6 text-3xl w-lg  font-bold">Verification</h1>

        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-300"
          />
        </div>

        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered "
          />
        </div>
        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
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

export default Verification;
