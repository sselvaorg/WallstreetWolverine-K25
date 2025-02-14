import telephoneImage from "./components/telephone.png";
import location from "./components/location.png";
import logo from "./components/logo.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
const kurl = ` ${import.meta.env.VITE_KAPI_URL}/mail/query`;
function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    query: "",
    mobile: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", formData);

    try {
      const kquery = await axios.post(`${kurl}`, {
        name: formData.name,
        email: formData.email,
        query: formData.query,
        mobile: formData.mobile,
      });
      console.log("Query:", kquery.data);
      alert(kquery.data.message);
    } catch (error) {
      console.error(
        "Query submission Failed:",
        error.response?.data?.message || error.message
      );
      alert(
        error.response?.data?.message ||
          "Query submission failed. Please try again."
      );
    } finally {
      setFormData({
        email: "",
        name: "",
        query: "",
        mobile: "",
      });
    }
  };
  return (
    <div className="font-sans min-h-screen w-full bg-gray-900 text-white bg-[url('/images/b3.png')] bg-cover bg-center">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 lg:px-20">
        {/* Contact Form */}
        <div className="w-full max-w-lg p-6 bg-blue-900 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md">
          <p className="text-2xl font-semibold text-center">
            How Can We Help You?
          </p>
          <div className="flex flex-col mt-4">
            <label className="font-semibold mb-1" htmlFor="name">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-75 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
              required
            />

            <label className="font-semibold mt-4 mb-1" htmlFor="email">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
            />
            <label className="font-semibold mt-4 mb-1" htmlFor="email">
              Your Mobile:
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-100 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
            />

            <label className="font-semibold mt-4 mb-1" htmlFor="message">
              Your Message:
            </label>
            <textarea
              className="bg-gray-700 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              id="message"
              rows="4"
              type="text"
              name="query"
              placeholder="Enter your query here"
              value={formData.query}
              onChange={handleChange}
            ></textarea>

            <button
              className="mt-6 py-2 bg-[#0bfe02] text-black font-semibold rounded-lg hover:bg-gray-300 transition w-full"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>

        <div className="w-full max-w-lg p-6 bg-blue-900 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md text-center">
          <h1 className="text-2xl font-semibold">Reach Us</h1>
          <div className="flex flex-col items-center mt-4">
            <img src={logo} className="w-16 h-20" alt="logo" />
            <p className="text-xl font-semibold mt-2">CEG TechForum</p>
            <p className="text-xs">An ISO 9001:2015 certified organisation</p>
          </div>

          <div className="flex items-center mt-6 text-sm text-center lg:text-left">
            <img
              src={location}
              className="w-6 h-6 bg-blue-800 rounded-full mr-2"
              alt="location"
            />
            <p>12, CEG Tech Forum, College of Engineering Guindy, Chennai-25</p>
          </div>

          <h1 className="text-2xl font-semibold mt-6">Contact Us</h1>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center justify-center lg:justify-start">
              <img
                src={telephoneImage}
                className="w-5 h-5 bg-blue-800 rounded-full mr-2"
                alt="phone"
              />
              Bava Viknesh R M G - +91 86102 44383
            </p>
            <p className="flex items-center justify-center lg:justify-start">
              <img
                src={telephoneImage}
                className="w-5 h-5 bg-blue-800 rounded-full mr-2"
                alt="phone"
              />
              Mohammed Nadhim S - +91 93445 55456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
