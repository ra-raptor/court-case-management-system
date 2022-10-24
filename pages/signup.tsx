import React from "react";

const signup = () => {
  return (
    <div className=" text-center bg-base-200 min-h-screen">
      <h1 className="text-5xl  py-6  font-bold">Signup</h1>
      <div className="py-6 mb-12 bg-base-200">
        <ul className="steps ">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step step-primary">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>

      <div className="grid place-items-center border-white  bg-base-200">
        <div className=" text-center grid place-items-center  w-1/2 ">
          <div className=" w-1/2  grow flex flex-col">
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
        <div className="flex w-1/2 px-10 mt-6  justify-between">
          <div className="btn btn-outline">Prev</div>
          <div className="btn btn-outline">Next</div>
        </div>
      </div>
    </div>
  );
};

export default signup;
