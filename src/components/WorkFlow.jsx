import React from "react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";

const WorkFlow = () => {
  return (
    <>
      <div className="border-t pt-12 flex items-center flex-col gap-12">
        <h1 className="text-2xl md:text-3xl lg:text-5xl w-full md:w-1/2 text-center leading-14 border-neutral-800">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-red-900 text-transparent bg-clip-text">
            coding workflow
          </span>
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="p-2 w-full lg:w-1/2 flex items-center justify-center">
            <img src={code} alt="" />
          </div>
          <div className="p-12 w-full lg:w-1/2">
            {checklistItems.map((option, key) => (
              <div
                className="flex mb-12"
                key={key}
              >
                <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items center rounded-full">
                    <CheckCircle2 />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="mt-1 mb-2 text-xl">{option.title}</p>
                  <p className="text-neutral-600 text-sm">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
