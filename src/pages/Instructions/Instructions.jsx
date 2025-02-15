import Navbar from "../../components/Navbar/Navbar";
import { instructions } from "../../constants/rulesAndInstructions";

export default function Rules() {
  return (
    <div className="relative min-h-screen selection:bg-transparent selection:text-white custom-scrollbar overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/b2.png')]  bg-cover bg-center opacity-100 -z-10"></div>
      <Navbar />
      <section className="flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wider mb-8">
          INSTRUCTIONS
        </h1>
        <div className="backdrop-blur-xl p-6 rounded-lg shadow-md max-w-6xl bg-light/40 max-h-[500px] overflow-y-scroll">
          <ul className="flex  flex-col space-y-7 text-lg font-semibold text-dark">
            {instructions.map((rule, index) => (
              <li key={index} className="flex items-start space-x-2 ">
                <span className={`${rule.color} flex font-bold top-0`}>
                  {rule.icon}
                </span>
                <p className="flex !font-sm text-gray-100 !font-semibold">
                  {rule.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
