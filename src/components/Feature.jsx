import React from "react";
import { features } from "../constants";

const Feature = () => {
  return (
    <div className="flex flex-col align-center justify-center gap-5 text-center p-6">
      <p className="text-md bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text">
        FEATURE
      </p>

      <h2 className="text-md md:text-3xl lg:text-5xl">
        Easy Build{" "}
        <span className="bg-gradient-to-r from-orange-600 via-red-600 to-red-900 text-transparent bg-clip-text">
          your code
        </span>
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-4 items-start">
        {features.map((feature, key) => (
          <div
            key={key}
            className="flex flex-col items-center justify-between gap-2"
          >
            <div className="flex items-start justify-between text-sm gap-2">
              <span className="text-orange-500">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>

            <p className="text-neutral-600 w-full text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
