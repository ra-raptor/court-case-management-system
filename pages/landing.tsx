import React from "react";
import Hero from "../components/Hero";
import LandingNavbar from "../components/LandingNavBar";
import Navbar from "../components/Navbar";

const landing = () => {
  interface Styleinf {
    "--value": number;
  }
  const Style: Styleinf = { "--value": 15 };
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <LandingNavbar />
          <Hero />
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
          <ul className="center steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
          <br />
          <label htmlFor="my-modal" className="btn modal-button">
            open modal
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You&apos;ve been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default landing;
