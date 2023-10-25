import React, { useState, useEffect } from "react";
import { MyContext } from "./MyContext";

export const MyContextProvider = (props) => {
  //fetch any api here and make the received data as global and use anywhere in the project.
  const [result, setResult] = useState([]);
  const arr = [];
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?&limit=100")
      .then((data) => {
        // console.log(data);
        return data.json();
      })
      .then((data) => {
        setResult(data);
        // console.log("result", data);
      });
  }, []);

  return (
    //provide global values below in provider.
    <MyContext.Provider
      value={{
        result,
        setResult,
        arr,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
