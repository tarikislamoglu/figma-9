import React from "react";

const App = () => {
  return (
    <div className="max-w-full min-h-screen flex items-center bg-[#00523F]">
      <div className="p-12 w-full md:w-1/2 h-2/3 ">
        <form className="flex flex-col w-full shadow-md shadow-[#A6A4A4B5] items-center justify-center h-full p-5 space-y-6 z-11">
          <h2 className="font-bold text-[85px] text-[#FFFFFFCC] w-full h-[122px] text-center md:text-start ">
            LOGIN
          </h2>
          <input
            placeholder="Username"
            type="text"
            className="border-2 rounded-md px-5 py-2 border-[#FFFFFF80] text-[#fff] w-full"
          />
          <input
            placeholder="Password"
            type="password"
            className="border-2 rounded-md px-5 py-2 border-[#FFFFFF80] text-[#fff] w-full"
          />
          <button className="px-3 py-2 rounded-md bg-[#FFFFFFCC] w-full">
            LOGIN
          </button>
        </form>
      </div>
      <img
        src="/Ellipse3.svg"
        className="absolute bottom-0 right-0 hidden md:block md:w-1/2 "
      />
      <img
        src="/jogging.svg"
        className="absolute rotate-[-18deg] hidden lg:w-1/2 lg:right-25 lg:bottom-35 md:w-1/3 md:right-33 md:bottom-40  md:block  "
      />
    </div>
  );
};

export default App;
