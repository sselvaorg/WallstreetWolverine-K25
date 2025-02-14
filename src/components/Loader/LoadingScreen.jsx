import { useState, useEffect } from "react";
import Loader from "./Loader";

const LoadingScreen = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {showLoader && <Loader color="#FFD700" size={300} />}
    </div>
  );
};

export default LoadingScreen;
