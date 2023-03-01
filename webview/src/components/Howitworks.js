import React from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">How it works</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Transfer crypto in 3 easy steps
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitation voluptatum
            voluptatem fuga aperiam accusantium labore.
          </p>
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <AiOutlineWallet className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Connect your wallet</h3>
              <p className="mt-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <BsGear className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Enter transfer parameters</h3>
              <p className="mt-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <FiPlay className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Go!</h3>
              <p className="mt-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
