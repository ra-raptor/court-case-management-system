import React from "react";
import Image from "next/image";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            width={300}
            height={400}
            alt="hero image"
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl mb-8 font-bold">
              Court Case Managemnet System!
            </h1>
            <p className="py-6 mb-4 pr-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-ghost border-gray-50">
              File New Case
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
