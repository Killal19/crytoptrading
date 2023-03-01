import React from "react";
import bannerImage1 from "../assets/banner.jpg";
import bannerImage2 from "../assets/banner2.jpg";
import bannerImage3 from "../assets/banner3.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-wrap ">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Ethereum Trades</span>
            <span className="block text-indigo-600">Made simpler</span>
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Get access to real-time data, secure transactions, and expert
            insights.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12 grid grid-cols-2 gap-4 my-4">
  <div className="relative h-96 w-full">
    <Image
      src={bannerImage1}
      alt="Banner 1"
      className="rounded-lg object-cover object-center"
      layout="responsive"
      width={800}
      height={600}
    />
  </div>
  <div className="grid grid-cols-1 gap-4">
    <div className="relative h-48 w-full">
      <Image
        src={bannerImage2}
        alt="Banner 2"
        className="rounded-lg object-cover object-center"
        layout="responsive"
        width={800}
        height={600}
      />
    </div>
    <div className="relative h-48 w-full">
      <Image
        src={bannerImage3}
        alt="Banner 3"
        className="rounded-lg object-cover object-center"
        layout="responsive"
        width={800}
        height={600}
      />
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
