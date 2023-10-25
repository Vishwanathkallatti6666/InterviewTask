import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [result, setResult] = useState([]);
  const arr = [];
  //   console.log("hello world");
  useEffect(() => {
    fetch(
      "https://camweara-customers.s3.ap-south-1.amazonaws.com/Assignment/test_json.json"
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setResult(res.sku);
      });
  }, []);
  console.log("before", arr);
  //to remove duplicates:
  result.map((item) => {
    if (arr.includes(item)) return;
    else arr.push(item);
  });
  console.log("after", arr);
  return (
    <>
      <h4>Modaka Tech</h4>
      <div id="main">
        {arr.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </>
  );
}
