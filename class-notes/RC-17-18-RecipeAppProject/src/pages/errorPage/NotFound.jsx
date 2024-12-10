import React, { useState, useEffect } from "react";
import Main from "./NotFoundStyle";
import { Navigate } from "react-router-dom";
const NotFound = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter - 1);

      if (counter === 0) {
        clearInterval(timer);
      }

      return ()=>clearInterval(timer)
    }, 1000);
  }, [counter]);


  if (counter===0) {return <Navigate to="/"/>}

  return (  
    <Main>
      <h3>Something went wrong</h3>
      <p>
        Within <strong>{counter}</strong> seconds, wou will be directed to the
        home page!{" "}
      </p>
    </Main>
  );
};

export default NotFound;
