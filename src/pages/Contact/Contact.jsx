import logo from "./components/logo.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex font-sans min-h-screen justify-center items-center w-full bg-gray-900 text-white bg-[url('/images/b3.png')] bg-cover bg-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 lg:px-20 w-full h-full">
          <div className="w-full max-w-lg p-6 bg-blue-900 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md">
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

              <label className="font-semibold mt-4 mb-1" htmlFor="kid">
                Your K-ID:
              </label>
              <input
                className="bg-gray-700 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="kid"
              />

              <label className="font-semibold mt-4 mb-1" htmlFor="message">
                Your Message:
              </label>
              <textarea
                className="bg-gray-700 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                id="message"
                rows="4"
              ></textarea>

              <button className="mt-6 py-2 bg-[#0bfe02] text-black font-semibold rounded-lg hover:bg-gray-300 transition w-full">
                SUBMIT
              </button>
            </div>
          </div>

          <div className="w-full max-w-lg p-6 bg-blue-900 bg-opacity-20 backdrop-blur-md border border-opacity-30 rounded-xl shadow-md text-center">
            <h1 className="text-2xl font-semibold">Reach Us</h1>
            <div className="flex flex-col items-center mt-4">
              <span className="bg-[#0bfe02] rounded-full justify-center items-center flex">
                <img src={logo} className="flex w-16 h-20" alt="logo" />
              </span>
              <p className="text-xl font-semibold mt-2">CEG TechForum</p>
              <p className="text-xs">An ISO 9001:2015 certified organisation</p>
            </div>

            <div className="flex items-center justify-center mt-6 text-sm text-center rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.370602293092!2d80.23400506847207!3d13.012055671301153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a207274009%3A0xad310ef6d46e1653!2sCEG%20Tech%20Forum!5e0!3m2!1sen!2sin!4v1739561499157!5m2!1sen!2sin"
                width="100%"
                className="rounded-lg flex w-8/9 "
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <h1 className="text-2xl font-semibold mt-6">General Inquiries</h1>
            <div className="mt-4 space-y-2 text-sm ">
              <span className="flex items-center justify-between bg-medium/80 rounded-lg ">
                <p className="p-2 flex-row flex">
                  <MdOutlinePhoneInTalk size="25px" className="pr-2" />
                  Ragul Kailash M
                </p>
                <a className="hover:underline pr-2" href="tel:+91-86678-20060">
                  +91-86678-20060
                </a>
              </span>
              <span className="flex items-center justify-between bg-medium/80  rounded-lg ">
                <p className="p-2 flex-row flex">
                  <MdOutlinePhoneInTalk size="25px" className="pr-2" />
                  Visvesswar A M
                </p>
                <a className="hover:underline pr-2" href="tel:+91-74182-43840">
                  +91-74182-43840
                </a>
              </span>
              <span className="flex items-center justify-between bg-medium/80  rounded-lg ">
                <p className="flex-row flex p-2">
                  <MdOutlinePhoneInTalk size="25px" className="pr-2" />
                  Selva Ganesh S
                </p>
                <a
                  className="flex hover:underline pr-2"
                  href="tel:+91-63692-69540"
                >
                  +91-63692-69540
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
