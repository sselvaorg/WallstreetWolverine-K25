import Navbar from "../../components/Navbar/Navbar";
import { instructions } from "../../constants/rulesAndInstructions";

export default function Rules() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://png.pngtree.com/background/20230616/original/pngtree-express-transportation-service-3d-render-of-cardboard-parcel-packaging-in-brown-picture-image_3666167.jpg')] bg-cover bg-center opacity-70 -z-10"></div>
      <Navbar />
      <section className="flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wider mb-8">
          INSTRUCTIONS
        </h1>
        <div className="bg-gradient-to-b from-red-300 to-blue-300 bg-opacity-90 p-6 rounded-lg shadow-md max-w-6xl max-h-[500px] overflow-y-scroll">
          <ul className="flex  flex-col space-y-7 text-lg">
            {instructions.map((rule, index) => (
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
