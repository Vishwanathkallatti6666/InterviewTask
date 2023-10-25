import React, { useContext } from "react";
import { MyContext } from "../contextApi/MyContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Favourites() {
  const { arr } = useContext(MyContext);
  return (
    <div>
      <Navbar />
      <h4>Your Favuorite Universities !</h4>

      <div>
        <table>
          <thead>
            <tr>
              <th style={{ minWidth: "20vw" }}>University Name</th>
              <th style={{ minWidth: "10vw" }}>Country</th>
              <th style={{ minWidth: "15vw" }}>Website Links</th>
              <th style={{ minWidth: "10vw" }}>Country Code</th>
            </tr>
          </thead>
        </table>
      </div>
      {arr?.map((res, index) => (
        <div>
          <tr>
            <td style={{ minWidth: "20vw" }}>{res.name}</td>
            <td style={{ minWidth: "10vw" }}>{res.country}</td>
            <td style={{ minWidth: "15vw" }}>
              <a href={`${res.web_pages[0]}`} target="_blank">
                {res.web_pages[0]}
              </a>
            </td>
            <td style={{ minWidth: "10vw" }}>{res.alpha_two_code}</td>
          </tr>
        </div>
      ))}
    </div>
  );
}
