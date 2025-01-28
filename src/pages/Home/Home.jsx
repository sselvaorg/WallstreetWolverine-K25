import Navbar from "../../components/Navbar/Navbar";
import { vid, wolf } from "./Components/vid";
import { useState } from "react";

const SecretDiv = ({
  divStyle,
  mouseFunc,
  text,
  visibleFunc,
  visible,
  textStyle,
  distance,
}) => {
  return (
    <div
      className={`${divStyle} absolute bottom-20 text-center z-10 w-[100px] h-[100px] flex items-center justify-center`}
      onMouseMove={(e) => mouseFunc(e, distance)}
      onMouseLeave={() => visibleFunc(false)}
    >
      {visible ? <h1 className={textStyle}>{text}</h1> : null}
    </div>
  );
};

export default function Home() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const handleMouseChange = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  const handleProximityCheck = (e, d, setVisibility) => {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(centerX - cursorX, 2) + Math.pow(centerY - cursorY, 2)
    );

    setVisibility(distance <= d);
  };

  const textStyle1 =
    "text-[120px] relative font-semibold animate-movecenter1 text-white";
  const textStyle2 =
    "text-[120px] relative font-semibold animate-movecenter2 text-white";

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden m-0"
      onMouseMove={handleMouseChange}
    >
      <Navbar />
      {/* Background video */}
      <video
        src={vid}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-screen w-screen object-cover -z-10 m-0"
      ></video>

      <div className="flex flex-col gap-[15px]">
        <div className="flex flex-row gap-[15px] justify-center animate-rDiv">
          {["W", "A", "L", "L", "S", "T", "R", "E", "E", "T"].map(
            (char, index) => (
              <p
                key={index}
                className={index % 2 === 0 ? textStyle1 : textStyle2}
              >
                {char}
              </p>
            )
          )}
        </div>
        <div className="flex flex-row gap-[15px] justify-center">
          {["W", "O", "L", "V", "E", "R", "I", "N", "E"].map((char, index) => (
            <p key={index} className={`${textStyle1} animate-movecenter3`}>
              {char}
            </p>
          ))}
        </div>
      </div>
      <img src={wolf} className="h-[180px] " alt="Wolf Image" />

      <div
        className="absolute border-[2px border-yellow-500 rounded-full pointer-events-none bg-yellow-500 opacity-45"
        style={{
          width: "200px",
          height: "200px",
          left: cursorX - 100,
          top: cursorY - 100,
          boxShadow: "0px 0px 75px 5px yellow",
        }}
      ></div>

      <SecretDiv
        visible={isVisible}
        visibleFunc={setIsVisible}
        mouseFunc={(e, d) => handleProximityCheck(e, d, setIsVisible)}
        distance={200}
        text="@Ceg Tech Forum"
        textStyle="font-bold text-white text-[24px]"
        divStyle="left-[1500px] w-[300px] m-0"
      />

      <SecretDiv
        visible={isVisible1}
        visibleFunc={setIsVisible1}
        mouseFunc={(e, d) => handleProximityCheck(e, d, setIsVisible1)}
        distance={100}
        text="Get Your Stock Details Faster"
        textStyle="font-bold text-white text-[24px]"
        divStyle="left-[50px] bottom-[800px] w-[100px] m-0"
      />

      <SecretDiv
        visible={isVisible2}
        visibleFunc={setIsVisible2}
        mouseFunc={(e, d) => handleProximityCheck(e, d, setIsVisible2)}
        distance={100}
        text="Buy now sell tomorrow"
        textStyle="font-bold text-white text-[24px]"
        divStyle="left-[1200px] bottom-[800px] w-[100px] m-0"
      />

      <SecretDiv
        visible={isVisible3}
        visibleFunc={setIsVisible3}
        mouseFunc={(e, d) => handleProximityCheck(e, d, setIsVisible3)}
        distance={100}
        text="Woo Woo"
        textStyle="font-bold text-white text-[24px]"
        divStyle="left-[200px] bottom-[50px] w-[50px] m-0"
      />
    </div>
  );
}
