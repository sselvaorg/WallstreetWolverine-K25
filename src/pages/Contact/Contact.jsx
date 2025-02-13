import telephoneImage from "./components/telephone.png";
import location from "./components/location.png";
import logo from "./components/logo.jpg";
import Navbar from "../../components/Navbar/Navbar";

function Contact() {
  return (
    <div className="font-sans min-h-screen bg-gray-900 text-white bg-[url('/images/b3.png')] bg-cover bg-center lg:bg-top">
      <Navbar />
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
        <div className="w-[4/5] p-6 bg-blue-900 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md">
          <p className="text-2xl font-semibold text-center">
            How Can We Help You?
          </p>
          <div className="flex flex-col mt-4">
            <label className="font-semibold mb-1" htmlFor="name">
              Your Name:
            </label>
            <input
              className="bg-gray-700 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
            />

            <label className="font-semibold mt-4 mb-1" htmlFor="email">
              Your Email:
            </label>
            <input
              className="bg-gray-700 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
            />

            <label className="font-semibold mt-4 mb-1" htmlFor="message">
              Your Message:
            </label>
            <textarea
              className="bg-gray-700 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              id="message"
              rows="4"
            ></textarea>

            <button className="mt-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full max-w-lg p-6 bg-blue-900 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md text-center">
          <h1 className="text-2xl font-semibold">Reach Us</h1>
          <div className="flex flex-col items-center mt-4">
            <img src={logo} className="w-16 h-20" alt="logo" />
            <p className="text-xl font-semibold mt-2">CEG TechForum</p>
            <p className="text-xs">An ISO 9001:2015 certified organisation</p>
          </div>

          <div className="flex items-center mt-6">
            <img
              src={location}
              className="w-6 h-6 bg-blue-800 rounded-full mr-2"
              alt="location"
            />
            <p>12, CEG Tech Forum, College of Engineering Guindy, Chennai-25</p>
          </div>

          <h1 className="text-2xl font-semibold mt-6">Contact Us</h1>
          <div className="mt-4 space-y-2">
            <p className="flex items-center">
              <img
                src={telephoneImage}
                className="w-5 h-5 bg-blue-800 rounded-full mr-2"
                alt="phone"
              />
              Bava Viknesh R M G - +91 86102 44383
            </p>
            <p className="flex items-center">
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
