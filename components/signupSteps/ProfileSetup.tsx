import React from "react";

const ProfileSetup = ({ userDetails, setuserDetails }) => {
  const handleFirstName = (e) => {
    setuserDetails({ ...userDetails, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setuserDetails({ ...userDetails, lastName: e.target.value });
  };
  const handleDOB = (e) => {
    setuserDetails({ ...userDetails, dob: e.target.value });
  };
  const handleGender = (e) => {
    setuserDetails({ ...userDetails, gender: e.target.value });
  };
  const handlePinCode = (e) => {
    setuserDetails({ ...userDetails, pincode: e.target.value });
  };
  const handleCity = (e) => {
    setuserDetails({ ...userDetails, city: e.target.value });
  };
  const handleState = (e) => {
    setuserDetails({ ...userDetails, state: e.target.value });
  };
  const handleAddress = (e) => {
    setuserDetails({ ...userDetails, address: e.target.value });
  };
  return (
    <div className=" text-center grid place-items-center">
      <div className=" w-3/4 md:w-1/2  grow flex flex-col px-4 md:px-10">
        <h1 className="mb-6 text-3xl w-lg  font-bold">Profile</h1>

        <div className="md:flex flex-row items-center w-full">
          <div className="form-control w-full  mb-6">
            <label className="label">
              <span className="label-text">First Name ( required ) </span>
            </label>
            <input
              value={userDetails.firstName}
              onChange={handleFirstName}
              placeholder="Type here"
              className="input input-bordered w-300 "
            />
          </div>
          <div className="w-3"></div>
          <div className="form-control w-full  mb-6">
            <label className="label">
              <span className="label-text">Last Name ( required )</span>
            </label>
            <input
              value={userDetails.lastName}
              onChange={handleLastName}
              placeholder="Type here"
              className="input input-bordered w-300 "
            />
          </div>
        </div>
        <div className="md:flex flex-row items-center w-full">
          <div className="form-control w-full  mb-6">
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              value={userDetails.dob}
              onChange={handleDOB}
              type="date"
              placeholder="Type here"
              className="input input-bordered w-300 "
            />
          </div>
          <div className="w-3"></div>
          <div className="form-control w-full  mb-6">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
              className="select "
              value={userDetails.gender}
              onChange={handleGender}
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
            <span className="label-text">Pin Code</span>
          </label>
          <input
            value={userDetails.pincode}
            onChange={handlePinCode}
            type="phone"
            placeholder="Type here"
            className="input input-bordered "
          />
        </div>
        <div className="md:flex flex-row items-center w-full">
          <div className="form-control w-full  mb-6">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              value={userDetails.city}
              onChange={handleCity}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-300 "
            />
          </div>
          <div className="w-3"></div>
          <div className="form-control w-full  mb-6">
            <label className="label">
              <span className="label-text">State</span>
            </label>
            <input
              value={userDetails.state}
              onChange={handleState}
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
            value={userDetails.address}
            onChange={handleAddress}
            className="textarea textarea-bordered h-24"
            placeholder="Address"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
