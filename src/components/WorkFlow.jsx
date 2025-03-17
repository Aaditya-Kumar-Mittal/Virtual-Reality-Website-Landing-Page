import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImage from "../assets/code.jpg";
import { checklistItems } from "../constants";

function WorkFlow() {
  return (
    <div className="mt-20 pb-10 border-b border-neutral-800">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide text-center">
        Accelarate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImage} alt="Code Image" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 bg-neutral-900 mx-6 size-12 p-2 justify-center items-center rounded-full">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
