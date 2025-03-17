import React from "react";
import { testimonials } from "../constants";
function Testimonials() {
  return (
    <div className="mt-20 tracking-wide border-b border-neutral-800 pb-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide text-center">
        What People Are Saying?
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-neutral p-6 border border-neutral-500 rounded-md font-thin text-md">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt="Image"
                  className="w-12 h-12 rounded-full mr-6 border border-orange-700"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="font-normal italic text-sm text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
