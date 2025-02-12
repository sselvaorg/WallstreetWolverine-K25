import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import bgVideo from "./components/background.mp4";
import SplitText from "./components/SplitText";
import StarBorder from "./components/StarBorder";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        formData
      );
      console.log("Login Successful:", response.data);
      alert("Login Successful!");

      // Store JWT token in local storage (for authentication)
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(
        "Login Failed:",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setFormData({
        email: "",
        password: "",
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
          <div className="w-[80%] lg:w-full max-w-sm sm:max-w-md bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-20">
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

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <StarBorder
                as="button"
                type="submit"
                className="custom-class"
                color="cyan"
                speed="7s"
                loop
              >
                Login
              </StarBorder>
            </form>

            <a
              href="https://kurukshetraceg.org.in/register"
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
