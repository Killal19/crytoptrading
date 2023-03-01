import React from "react";
import EthingoImage from "../assets/Ethingo.jpg";
import Image from "next/image";

const WhyChooseEthingo = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-wrap">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full justify-center items-center">
        <div className="flex flex-col items-center justify-start w-full mt-10">
          <Image src={EthingoImage} alt="Ethingo" width={400}  />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Choose Ethingo?
          </h2>
          <p className="text-lg font-light text-gray-700 mb-4">
            Ethingo is the leading platform for secure and reliable crypto trading. Our cutting-edge technology and expert team ensure that your assets are always safe and your trades are executed quickly and efficiently.
          </p>
          <p className="text-lg font-light text-gray-700 mb-4">
            Whether you're a seasoned crypto trader or just getting started, Ethingo offers the tools and support you need to succeed in the world of crypto. So why wait? Sign up today and start trading with confidence!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEthingo;
