import Navbar from "../../components/Navbar/Navbar";
import PropTypes from "prop-types";

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
  const textStyle1 =
    "text-[120px] max-sm:text-[40px] max-lg:text-[80px] relative font-semibold max-sm:font-bold animate-movecenter1 text-dark";
  const textStyle2 =
    "text-[120px] max-sm:text-[40px] max-lg:text-[80px] relative font-semibold max-sm:font-bold animate-movecenter2 text-dark";

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden m-0 overflow-x-hidden overflow-y-auto bg-[url('src/pages/Home/components/b1.jpg')] bg-cover bg-center lg:bg-top">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="flex flex-col gap-[15px] max-w-full">
        <div className="flex flex-row gap-[15px] max-sm:gap-[10px] justify-center animate-rDiv">
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
        <div className="flex flex-row gap-[15px] max-sm:gap-[10px] justify-center">
          {["W", "O", "L", "V", "E", "R", "I", "N", "E"].map((char, index) => (
            <p
              key={index}
              className={`${textStyle1} animate-movecenter3 max-sm:animate-movecenter4 max-lg:animate-movecenter5`}
            >
              {char}
            </p>
          ))}
        </div>
      </div>

      {/* <img
        src={wolf}
        className="h-[180px] max-sm:h-[140px] mt-[20px]"
        alt="Wolf Image"
      /> */}
    </div>
  );
}

SecretDiv.propTypes = {
  divStyle: PropTypes.string,
  mouseFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  visibleFunc: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  textStyle: PropTypes.string,
  distance: PropTypes.number.isRequired,
};
