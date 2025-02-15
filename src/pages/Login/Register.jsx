import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import bgVideo from "./components/background.mp4";
import SplitText from "./components/SplitText";
import StarBorder from "./components/StarBorder";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const kurl = ` ${import.meta.env.VITE_KAPI_URL}/admin/check-kid-email`;

let CREDS = import.meta.env.VITE_KAPI_CREDENTIALS;
CREDS = JSON.parse(CREDS);
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    kid: "",
    email: "",
  });

  const handleAnimationComplete = () => {
    //console.log("All letters have animated!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data submitted", formData);
    try {
      const kuser = await axios.post(
        `${kurl}?user=${CREDS.user}&access=${CREDS.access}`,
        { kid: formData.kid, email: formData.email }
      );
      if (!kuser.data?.auth) toast("Register for Kururkshetra 2025!");
      await axios.post("http://localhost:5000/user/register", {
        kid: formData.kid,
        email: formData.email,
      });

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Try again!");
    } finally {
      setFormData({
        kid: "",
        email: "",
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
                placeholder="Enter your K! ID"
                value={formData.kid}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your K25! Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
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
                Register
              </StarBorder>
            </form>

            <a
              href="/login"
              className="block text-center mt-4 text-blue-300 hover:text-blue-400 hover:underline"
            >
              Already have an account? Login here!
            </a>
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

export default Register;
