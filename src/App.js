import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen flex items-center bg-[#00523F]">
      <div className="  p-12  w-full md:w-1/2 h-2/3 ">
        <form className="flex flex-col w-full shadow-md shadow-[#A6A4A4B5] items-center justify-center h-full px-5 space-y-6 z-11">
          <h2 className="font-bold text-[85px] text-[#FFFFFFCC] w-full h-[122px] ">
            LOGIN
          </h2>
          <input
            placeholder="Username"
            className="border-2 rounded-md px-5 py-2 border-[#FFFFFF80] text-[#fff] w-full"
          />
          <input
            placeholder="Password"
            className="border-2 rounded-md px-5 py-2 border-[#FFFFFF80] text-[#fff] w-full"
          />
          <button className="px-3 py-2 rounded-md bg-[#FFFFFFCC] w-full">
            LOGIN
          </button>
        </form>
      </div>
      <img
        src="/Ellipse3.svg"
        className="absolute bottom-[-30px] right-[-30px] hidden md:block md:w-1/2 lg:w-1/2"
      />
      <img
        src="/jogging.svg"
        className="absolute rotate-[-18] lg:right-10 lg:bottom-25 md:right-2 md:bottom-10 hidden md:block md:w-1/2 lg:w-1/2"
      />
    </div>
  );
};

export default App;
