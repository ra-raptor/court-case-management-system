import axios from "axios";
import Link from "next/link";
import React from "react";

const TableItem = ({ props, showDelete = false }) => {
  const handleDelete = async () => {
    console.log("hello");

    axios
      .delete("/api/cases/", {
        params: { props },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <li className="flex px-2">
      <div
        className={`w-9 h-9 rounded-full shrink-0 ${
          props.caseNature === "Civil" ? "bg-indigo-500" : "bg-red-500"
        } my-2 mr-3`}
      >
        <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
          <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
        </svg>
      </div>
      <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
        <div className="grow flex justify-between">
          <div className="self-center">
            <p className="font-medium text-slate-800 hover:text-slate-900">
              {props.causeOfAction}
            </p>
          </div>

          <div className="shrink-0 cursor-pointer flex self-end ml-2">
            {showDelete && (
              <div className=" cursor-pointer mr-10" onClick={handleDelete}>
                <Link href="/">
                  <span className="font-medium text-indigo-500  hover:text-indigo-600">
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            )}
            <Link href="/">
              <span className="font-medium text-indigo-500 hover:text-indigo-600">
                View
                <span className="hidden sm:inline"> -&gt;</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TableItem;
