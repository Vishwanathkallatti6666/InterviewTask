import React, { useState } from "react";
import Data from "./Data";
import MyContextProvider from "../contextApi/MyContextProvider";
import { BrowserRouter, Link } from "react-router-dom";
import Favourites from "./Favourites";
import Navbar from "./Navbar";

export default function Home() {
  const [searchUniversity, setSearchUniversity] = useState("");
  const [selectCountry, setSelectCountry] = useState("");

  const countryNames = [
    "",
    "United States",
    "India",
    "Ukraine",
    "Chile",
    "France",
    "China",
    "United Kingdom",
  ];
  console.log(selectCountry);
  return (
    <>
      <Navbar />
      <div id="search-bar">
        <span>
          <b>Search for University :</b>
        </span>
        <input
          id="search-text"
          type="text"
          placeholder="Enter University name"
          onChange={(e) => {
            setSearchUniversity(e.target.value);
          }}
        />
        <span id="search-country">
          <b>Search for Country:</b>
        </span>
        <select
          id="dropdown"
          onChange={(e) => setSelectCountry(e.target.value)}
        >
          {countryNames.map((item) => (
            <option value={item}>{item} </option>
          ))}
        </select>
      </div>

      <Data searchUniversity={searchUniversity} selectCountry={selectCountry} />
    </>
  );
}
