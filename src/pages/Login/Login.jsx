import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import bgVideo from "./components/background.mp4";
import SplitText from "./components/SplitText";
import StarBorder from "./components/StarBorder";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const kurl = ` ${import.meta.env.VITE_KAPI_URL}/auth/login`;

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleAnimationComplete = () => {
    //console.log("All letters have animated!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Submitting form:", formData);

    try {
      const klogin = await axios.post(`${kurl}`, {
        email: formData.email,
        pwd: formData.password,
      });
      //console.log("klogin:", klogin.data);
      toast.success("Login Successfull");
      let firstTimeLogin = localStorage.getItem("login");
      if (!firstTimeLogin || firstTimeLogin !== formData.email) {
        localStorage.setItem("login", `${formData.email}`);
        await axios.post("http://localhost:5000/user/login", {
          kid: klogin.data.user.kid,
          firstname: klogin.data.user.firstname,
          lastname: klogin.data.user.lastname,
          email: klogin.data.user.email,
          phone: klogin.data.user.phone,
          college: klogin.data.user.college,
          year: klogin.data.user.year,
          dept: klogin.data.user.dept,
          roll: klogin.data.user.roll,
        });

        //console.log(response);
      }
      //console.log(klogin.data.message);
      localStorage.setItem("token", klogin.data.token);
    } catch (error) {
      console.error(
        "Login Failed:",
        error.response?.data?.message || error.message
      );
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
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
          <div className="w-[80%] lg:w-full max-w-sm sm:max-w-md bg-white bg-opacity-10 lg:backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-20">
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
                placeholder="Enter your K! 25 Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
              />

              <input
                type="password"
                name="password"
                placeholder="Enter your K! 25 Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
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
              href="/register"
              className="block text-center mt-4 text-blue-300 hover:text-blue-400 hover:underline"
            >
              REGISTER HERE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
