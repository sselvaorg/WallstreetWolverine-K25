import tlephoneImage from "./components/telephone.png";
import location from "./components/location.png";
import logo from "./components/logo.jpg";
import bg from "/background/background.mp4";
import Navbar from "../../components/Navbar/Navbar";

function Contact() {
  return (
    <div className="font-sans h-screen">
      <Navbar />
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col items-center justify-around p-6">
          <p className="text-2xl font-semibold text-white text-center">
            How Can We Help You?
          </p>
          <div className="flex flex-col items-center mt-4 p-8 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md bg-blue-900">
            <label className="text-white font-semibold mb-3" htmlFor="name">
              Your Name:
            </label>
            <input
              className="text-white bg-gray-700 w-96 h-10 rounded-md border-none shadow-md px-2 outline-none hover:shadow-white transition"
              type="text"
              id="name"
              name="name"
            />

            <label
              className="text-white font-semibold mb-3 mt-4"
              htmlFor="email"
            >
              Your Email:
            </label>
            <input
              className="text-white bg-gray-700 w-96 h-10 rounded-md border-none shadow-md px-2 outline-none hover:shadow-white transition"
              type="email"
              id="email"
              name="email"
            />

            <label
              className="text-white font-semibold mb-3 mt-4"
              htmlFor="message"
            >
              Your Message:
            </label>
            <textarea
              className="text-white bg-gray-700 w-96 h-40 rounded-md border-none shadow-md p-2 outline-none hover:shadow-white transition resize-none"
              id="message"
              name="message"
            ></textarea>

            <button className="text-white px-4 py-2 mt-6 text-lg bg-opacity-20 border border-opacity-30 rounded-lg shadow-md hover:bg-white hover:text-black transition">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center pt-16">
          <div className="flex flex-col items-center p-6 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md bg-blue-900">
            <h1 className="text-2xl font-semibold text-white">Reach Us</h1>
            <div className="flex items-center justify-center mt-6">
              <img src={logo} className="w-16 h-20" alt="logo" />
              <div className="ml-4 text-white">
                <div className="flex">
                  <p className="text-2xl font-semibold">CEG</p>
                  <p className="text-2xl font-light ml-2">TechForum</p>
                </div>
                <p className="text-xs text-center">
                  An ISO 9001:2015 certified organisation
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-6 text-white">
            <img
              src={location}
              className="w-6 h-6 bg-blue-800 rounded-full mb-2"
              alt="place"
            />
            <p className="text-center">
              12, CEG Tech Forum, College of Engineering Guindy, Sardar Patel
              Road, Chennai-25
            </p>
          </div>

          <div className="flex flex-col items-center mt-6 text-white">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <p className="mt-4 flex items-center">
              <img
                src={tlephoneImage}
                className="w-5 h-5 bg-blue-800 rounded-full mr-2"
                alt="phone"
              />{" "}
              Bava Viknesh R M G - +91 86102 44383
            </p>
            <p className="mt-2 flex items-center">
              <img
                src={tlephoneImage}
                className="w-5 h-5 bg-blue-800 rounded-full mr-2"
                alt="phone"
              />{" "}
              Mohammed Nadhim S - +91 93445 55456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
