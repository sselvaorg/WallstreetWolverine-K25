import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import bgVideo from "./components/background.mp4";
import SplitText from "./components/SplitText";
import StarBorder from "./components/StarBorder";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Register() {
  const [isPassword, setIsPassword] = useState("password");
  const [isConfirmPassword, setIsConfirmPassword] = useState("password");
  const [formData, setFormData] = useState({
    kid: "",
    name: "",
    college: "",
    dept: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("data submitted", formData);
    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        kid: formData.kid,
        name: formData.name,
        college: formData.college,
        dept: formData.dept,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      });

      console.log("Registration Success:", response.data);

      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Try again!");
    } finally {
      setFormData({
        kid: "",
        name: "",
        college: "",
        dept: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 z-0"></div>

      <div className="relative z-10">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-[95%] lg:w-full max-w-sm sm:max-w-md bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white border-opacity-20">
            <div className="flex justify-center items-center mb-6">
              <SplitText
                text="Register Here!"
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="kid"
                placeholder="KID"
                value={formData.kid}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <input
                type="text"
                name="college"
                placeholder="College"
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <input
                type="text"
                name="dept"
                placeholder="Department"
                value={formData.dept}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <div className="flex items-center border border-gray-100">
                <input
                  type={isPassword}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                  required
                />
                <span
                  className="p-3 text-2xl bg-white opacity-75 cursor-pointer"
                  onClick={() =>
                    setIsPassword((prev) =>
                      prev === "password" ? "text" : "password"
                    )
                  }
                >
                  {isPassword === "password" ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="flex items-center border border-gray-100">
                <input
                  type={isConfirmPassword}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                  required
                />
                <span
                  className="p-3 text-2xl bg-white opacity-75 cursor-pointer"
                  onClick={() =>
                    setIsConfirmPassword((prev) =>
                      prev === "password" ? "text" : "password"
                    )
                  }
                >
                  {isConfirmPassword === "password" ? (
                    <FaEye />
                  ) : (
                    <FaEyeSlash />
                  )}
                </span>
              </div>

              <StarBorder
                as="button"
                type="submit"
                className="custom-class"
                color="cyan"
                speed="7s"
                loop
              >
                Register
              </StarBorder>
            </form>

            <a
              href="#"
              className="block text-center mt-4 text-blue-300 hover:text-blue-400 hover:underline"
            >
              Already have an account? Login here!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
