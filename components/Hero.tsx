import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import Link from "next/link";

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
          <div className="px-10">
            <h1 className="text-3xl md:text-5xl text-center md:text-left mb-8 font-bold">
              Court Case Managemnet System!
            </h1>
            <p className="py-6 text-center md:text-left mb-4 pr-10">
              The project Court case management system is developed for managing
              and tracking the status and details of a particular case in the
              court. This system can be used to file a new case and close an
              already existing case in the court.
            </p>
            <Link href="/login">
              <button className="btn w-full btn-outline btn-primary btn-ghost border-gray">
                File New Case
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
