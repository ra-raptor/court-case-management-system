import React from "react";

const Documents = ({ userDetails, setuserDetails }) => {
  return (
    <div className=" text-center grid place-items-center">
      <div className=" w-3/4 md:w-1/2  grow flex flex-col px-4 md:px-10">
        <h1 className="mb-6 text-3xl w-lg  font-bold">Documents ( Dummy )</h1>
        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Aadhar Card / Pan Card*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Profile picture</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control  mb-6">
          <label className="label">
            <span className="label-text">Signature*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Documents;
