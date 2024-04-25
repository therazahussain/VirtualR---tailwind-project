import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6 flex flex-col justify-start items-center gap-8 mb-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl W:full md:w-1/2 mt-12 text-center leading-14">
          VirtualR Build tool{" "}
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-red-900 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="text-neutral-600 text-center text-xs md:text-md">
          Empower your creativity and bring your VR app ideas to life with out
          initutive developement tools. <br /> Get Started today and turn your
          imagination into immersive reality.
        </p>

        <div className="flex gap-5 flex-1 justify-center items-center">
          <button className="text-xs md:text-md lg:text-[16px] bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 px-[3px] border-orange-500 rounded-md p-3">
            Start for free
          </button>
          <button className="text-xs md:text-md lg:text-[16px] border-2 border-white px-[3px] rounded-md p-2">
            Documentation
          </button>
        </div>

        <div className="flex flex-wrap mt-6 justify-center items-center gap-8">
          <video
            className="w-[300px] lg:w-1/3 rounded-lg border-2 border-orange-300"
            autoPlay={true}
            loop
            muted
          >
            <source src={video1} type="video/mp4" />
            Your Browser does not support video tag
          </video>
          <video
            className="w-[300px] lg:w-1/3 rounded-lg border-2 border-orange-300"
            autoPlay={true}
            loop
            muted
          >
            <source src={video2} type="video/mp4" />
            Your Browser does not support video tag
          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
