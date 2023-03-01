import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-black";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none  text-black border-indigo-500 text-sm"
  />
);

const Paymentcard = () => {
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
    
        e.preventDefault();
    
        if (!addressTo || !amount || !keyword || !message) return;
    
        sendTransaction();
      };
    
  return (
    <div className="">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-wrap ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full justify-center items-center">
          <div className="flex flex-col items-center justify-start w-full  sm:mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 w-full my-5 eth-card bg-gradient-to-r from-blue-400 to-purple-500">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">Ethereum</p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Send ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center bg-gray-50 rounded-lg shadow-lg p-5 text-black">
            <Input
              placeholder="To Address"
              name="addressTo"
              type="text"
              handleChange={""}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={""}
            />
            <Input
              placeholder="Keyword(GIF)"
              name="keyword"
              type="text"
              handleChange={""}
            />
            <Input
              placeholder="Message (Optional)"
              name="message"
              type="text"
              handleChange={""}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false
            ? <Loader />
            : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full cursor-pointer py-2"
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentcard;
