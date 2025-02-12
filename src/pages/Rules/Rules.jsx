import Navbar from "../../components/Navbar/Navbar";
import { rules } from "../../constants/rulesAndInstructions";

export default function Rules() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('src/pages/Instructions/stock.jpg')] bg-cover bg-center opacity-100 -z-10"></div>
      <Navbar />
      <section className="flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wider mb-8">
          RULES
        </h1>
        <div className="backdrop-blur-lg bg-opacity-90 p-6 rounded-lg shadow-md max-w-6xl max-h-[500px] overflow-y-scroll">
          <ul className="flex  flex-col space-y-7 text-lg font-semibold text-gray-300">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className={`${rule.color} flex font-bold top-0`}>
                  {rule.icon}
                </span>
                <p className="flex">{rule.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
