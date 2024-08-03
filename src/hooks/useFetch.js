import { useState, useEffect } from "react";

function useFetch() {
  const [advice, setAdvice] = useState({
    id: 0,
    advice: "No one yet!",
  });

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const { slip } = await response.json();

      console.log(slip);

      setAdvice({
        id: slip.id,
        advice: slip.advice,
      });
    } catch (error) {
      console.error("Error fetching advice:", error);
      throw error;
    }
  };

  return {
    data: advice,
    newLoad: getAdvice,
  };
}

export { useFetch };
