import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import image from "/images/K_25_Logo.png";
import { navLinks, isAuthenticated } from "../../constants/navlinks";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { x: -50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  const imageVariants = {
    closed: { scale: 0, opacity: 0 },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    const updateAuth = () => setAuth(isAuthenticated());

    window.addEventListener("storage", updateAuth);

    return () => {
      window.removeEventListener("storage", updateAuth);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    setAuth(false);
    navigate("/login");
  };
  return (
    <nav className="flex items-center justify-between px-4 md:px-6 relative z-[1000] w-full top-0 p-3 bg-gradient-to-b from-gray-900 to-gray-800">
      <a href="https://kurukshetraceg.org.in/" target="_blank">
        <img src={image} alt="Logo" className="h-8 md:h-12" />
      </a>

      <button
        className="sm:hidden text-gray-100 hover:text-blue-300 focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.svg
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <motion.path
              initial={false}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <motion.path
              initial={false}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </motion.svg>
      </button>

      <div className="hidden sm:flex sm:items-center sm:gap-6">
        {navLinks(auth).map(
          (link, i) =>
            link && (
              <NavLink
                key={i}
                to={link.link}
                onClick={(e) => {
                  if (link.name === "Logout") {
                    e.preventDefault();
                    logout();
                  }
                }}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-3 font-medium transition-transform duration-300 ease-in-out hover:scale-110 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-100 hover:text-blue-300"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            )
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 bg-black/50 sm:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 left-0 h-full z-[999999] w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg sm:hidden border-r border-gray-700"
            >
              <div className="flex flex-col w-full">
                <motion.div
                  variants={imageVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="p-4 border-b border-gray-700 bg-gray-900/50"
                >
                  <img src={image} alt="Logo" className="h-10 w-auto" />
                </motion.div>
                <div className="flex flex-col w-full p-4">
                  {navLinks(auth).map(
                    (link, i) =>
                      link && (
                        <motion.div
                          key={link.name}
                          custom={i}
                          variants={linkVariants}
                          initial="closed"
                          animate="open"
                          className="w-full"
                        >
                          <NavLink
                            to={link.link}
                            onClick={(e) => {
                              if (link.name === "Logout") {
                                e.preventDefault();
                                logout();
                              }
                            }}
                            className={({ isActive }) =>
                              `flex items-center gap-2 py-3 font-medium transition-transform duration-300 ease-in-out hover:scale-110 ${
                                isActive
                                  ? "text-blue-400"
                                  : "text-gray-100 hover:text-blue-300"
                              }`
                            }
                          >
                            {link.icon}
                            {link.name}
                          </NavLink>
                        </motion.div>
                      )
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
