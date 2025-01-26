import React, { useState } from "react";
import image from "./assets/k25.jpg";
import bgVideo from "./assets/background.mp4";
import SplitText from "./SplitText";

import StarBorder from './StarBorder'
function App() {
  const [isHam, setHam] = useState(false);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 z-0"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 md:px-6 py-4">
          {/* Logo */}
          <img src={image} alt="Logo" className="h-8 md:h-12" />

          {/* Hamburger */}
          <button
            className="sm:hidden text-gray-100 hover:text-blue-300 focus:outline-none"
            onClick={() => setHam(!isHam)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

              <div
            className={`${
              isHam ? "block" : "hidden"
            } sm:flex sm:items-center sm:gap-6 flex-col sm:flex-row absolute sm:static top-16 left-0 w-full sm:w-auto bg-opacity-0 z-10`}
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-100 hover:text-blue-300 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-100 hover:text-blue-300 font-medium"
            >
              Market
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-100 hover:text-blue-300 font-medium"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-100 hover:text-blue-300 font-medium"
            >
              Instructions
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-100 hover:text-blue-300 font-medium"
            >
              Rules
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-100 hover:text-blue-300 font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-100 hover:text-blue-300 font-medium"
            >
              Login
            </a>
          </div>
        </nav>

        {/* Login Form */}
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-sm sm:max-w-md bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-20">
            <div className="flex justify-center items-center mb-6">
              <SplitText
                text="Login Here!"
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{
                  opacity: 1,
                  transform: "translate3d(0,0,0)",
                }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
            <form className="flex flex-col gap-4">
          
              
              <input
                type="email"
                placeholder="Mail"
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300
                placeholder-black"
                required
               
              />
               
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300
                placeholder-black"
                required
              />

  
              <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="7s"
              loop
              >
                Login
              </StarBorder>
            </form>
            <a
              href="#"
              className="block text-center mt-4 text-blue-300 hover:text-blue-400 hover:underline"
            >
              SIGN UP FOR K!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
