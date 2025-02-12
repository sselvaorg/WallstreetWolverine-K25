import { useState } from "react";
import { Link } from "react-router-dom";
import image from "/images/K_25_Logo.png";
import { navlinks } from "../../constants/navlinks";

export default function Navbar() {
  const [isHam, setHam] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 relative z-[999999] w-full top-0 p-3 ">
      <a href="https://kurukshetraceg.org.in/" target="_blank">
        <img src={image} alt="Logo" className="h-8 md:h-12" />
      </a>

      <button
        className="sm:hidden text-gray-100 hover:text-blue-300 focus:outline-none z-50 relative"
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

      <div className="hidden sm:flex sm:items-center sm:gap-6">
        {navlinks.map((link) => (
          <Link
            key={link.name}
            to={link.link}
            className="text-white hover:text-blue-300 font-medium transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {isHam && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-dark/95 z-40 shadow-lg">
          <div className="flex flex-col items-center py-4">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                onClick={() => setHam(false)}
                className="block px-4 py-3 text-gray-100 hover:text-blue-300 font-medium w-full text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
