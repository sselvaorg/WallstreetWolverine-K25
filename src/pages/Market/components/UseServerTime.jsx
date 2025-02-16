import { useState, useEffect } from "react";
import axios from "axios";
const useServerTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await axios.get(
          "https://api.wsw.kurukshetraceg.org.in/time"
        );

        const serverTime = new Date(response.data.serverTime);
        const localTime = new Date();

        setOffset(serverTime.getTime() - localTime.getTime());
      } catch (error) {
        console.error("Error fetching server time:", error);
      }
    };

    fetchServerTime();

    const timer = setInterval(() => {
      setCurrentTime(new Date(Date.now() + offset));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return currentTime;
};

export default useServerTime;
