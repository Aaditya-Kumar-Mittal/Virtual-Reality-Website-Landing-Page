import React from "react";
import { pricingOptions } from "../constants";
function PricingSection() {
  return (
    <div className="mt-20 pb-10 border-b border-neutral-800">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide text-center">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={index}>
            <div className="p-10 border border-neutral-500 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="text-xl bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                    {" "}
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2 bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                  {option.price}
                </span>
                <span className="text-neutral-500 tracking-tight">/Month</span>
              </p>
              <ul>
                {}
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center w-full h-12 mt-15 text-xl text-center p-5 tracking-tight bg-orange-700 border border-orange-800 rounded-lg transition duration-200  hover:bg-orange-900"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
