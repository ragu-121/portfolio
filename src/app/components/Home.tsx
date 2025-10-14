import React from "react";

const Home = () => {
  return (
    // <div className='relative bg-[url("/mainbg_1.jpg")] bg-no-repeat bg-center bg-cover'>
    <div className='relative'>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
      <div className="custom-container w-full h-full">
        <div className="w-full py-52 text-center">
          <p className="text-sm font-normal text-black tracking-wide">
            Hi There!
          </p>
          <h2 className="text-5xl font-bold text-black tracking-wide pt-3 pb-2">
            RAGUVANAN P
          </h2>
          <h5 className="text-xl font-medium text-black">Frontend Developer</h5>
          <p className="text-center text-base leading-6 max-w-5xl mx-auto pt-3 pb-2">Creative Frontend Developer passionate about crafting responsive, user-friendly web interfaces using React and modern JavaScript frameworks. I turn ideas into elegant, interactive experiences that perform beautifully across devices.</p>
          <button className="btn-layout text-base bg-primary">Contact Me</button>
          <button className="btn-layout ml-6 text-base bg-primary">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
