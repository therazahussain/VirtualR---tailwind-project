import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="pt-12 flex items-center flex-col gap-12 w-full">
      <h1 className="text-2xl w-full md:text-3xl lg:text-5xl md:w-1/2 text-center leading-14 border-neutral-800">
        Pricing
      </h1>
      <div className="mt-4 flex flex-wrap px-10 gap-6 justify-center items-center">
        {pricingOptions.map((option, key) => (
          <div className="flex items-start justify-start flex-col border border-neutral-800 rounded-lg p-8 gap-4 w-[300px]">
            <h4 className="text-xl">{option.title}</h4>
            <h2 className="text-3xl">
              {option.price} <span className="text-sm">/ Month</span>{" "}
            </h2>
            {option.features.map((feature, key) => (
              <div className="flex flex-col-gap-2 items-center" key={key}>
                <div className="bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full mr-2">
                  <CheckCircle2 />
                </div>
                <p className="text-sm">{feature}</p>
              </div>
            ))}
            <div className="w-full flex items-center justify-center">
                <button className="mt-4 border py-2 rounded-lg border-red-800 text-red-800 w-full">Subscribe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
