import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-black text-lg">{title}</h3>
      <p className="mt-1 text-black text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="bg-gray-100  ">

    <div className=" container mx-auto px-4 md:px-20 py-12">
    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase text-center">Services offered</h2>
      <div className="flex md:flex-row items-center justify-between flex-col">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-black text-3xl font-semibold sm:text-5xl py-2">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="text-left my-2 text-black font-light md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-indigo-600"
            title="Security guarantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            className="rounded border"

          />
          <ServiceCard
            color="bg-purple-600"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Get the best exchange rates for your crypto assets"
          />
          <ServiceCard
            color="bg-red-600"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Get the fastest transactions for your crypto assets"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
