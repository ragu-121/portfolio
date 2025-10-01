import React from "react";

const Home = () => {
  return (
    <div className='relative bg-[url("/mainbg_1.jpg")] bg-no-repeat bg-center bg-cover'>
          <div
    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
  ></div>
          {/* <div
    className="absolute inset-0 gradient-home"
  ></div> */}
      <div className="custom-container w-full h-full">
        <div className="w-1/2 py-52">
            <p className="text-sm font-normal text-white tracking-wide">Hi There!</p>
            <h2 className="text-5xl font-bold text-white tracking-wide pt-3 pb-2">RAGUVANAN P</h2>
            <h5 className="text-xl font-medium text-white pb-6">Role</h5>
            <button className="px-4 py-2 text-base bg-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
