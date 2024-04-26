import React from "react";
import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <div className="pt-12 flex items-center flex-col gap-12">
      <h1 className="text-2xl md:text-3xl lg:text-5xl w-full text-center leading-14">
        What people are saying
      </h1>

      <div className="flex items-start justify-center gap-6 w-full flex-wrap">
        {testimonials.map((testimonial, key) => (
          <div
            key={key}
            className="border border-neutral-800 flex flex-col items-start p-6 rounded-lg w-[300px] gap-4"
          >
            <p className="text-md text-neutral-500">{testimonial.text}</p>
            <div className="flex items-center w-full gap-4 justify-start">
              <img
                src={testimonial.image}
                className="w-14 rounded-full"
                alt=""
              />
              <div className="flex flex-col gap-1 justify-start items-start">
                <p className="text-sm text-neutral-400">{testimonial.user}</p>
                <p className="text-xs text-neutral-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
