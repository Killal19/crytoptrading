import React from "react";
import { FaQuoteLeft } from "react-icons/fa";


const Testimonial = ({ name, quote, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 sm:p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={image} alt={name} />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-gray-800">{name}</p>
          <p className="text-sm font-medium text-gray-500">Crypto Investor</p>
        </div>
      </div>
      <div className="text-lg leading-7 font-medium text-gray-900 mb-6">
        <FaQuoteLeft className="inline-block mr-2 text-blue-500" />
        {quote}
      </div>
    </div>
  );
};

export default Testimonial;
