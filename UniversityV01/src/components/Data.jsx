import "../App.css";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";
import { MyContext } from "../contextApi/MyContext";

export default function Data({ searchUniversity, selectCountry }) {
  //Global values
  let { result, setResult, arr } = useContext(MyContext);

  const [filteredResult, setFilteredResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);
  let currentPosts1 = filteredResult.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts1);

  //changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //For Adding Favourites universities
  function handleCheck(res, e) {
    // console.log(e.target.checked);
    if (e.target.checked) {
      const obj = { id: Date.now(), ...res };
      arr.push(obj);
      console.log(arr);
    } else {
      let x = arr.filter((item) => item.name != res.name);
      arr = x;
      console.log(arr);
    }
  }

  useEffect(() => {
    let filteredData1 = result.filter(
      (item, index) => item.country === selectCountry
    );

    setFilteredResult(filteredData1);
    let result1 = filteredData1;
    console.log(filteredResult);
  }, [result, selectCountry]);

  //Filtering based on Universities
  useEffect(() => {
    if (searchUniversity && result) {
      let filteredData = result.filter((item, index) =>
        item.name.toLowerCase().startsWith(searchUniversity.toLowerCase())
      );
      setFilteredResult(filteredData);
      // console.log(filteredResult);
    } else {
      setFilteredResult([]);
    }
  }, [searchUniversity, result]);
  const callForData = () => {
    let dataToRender = currentPosts;
    if (currentPosts1 && currentPosts1.length) {
      dataToRender = currentPosts1;
    }
    //
    return dataToRender.map((res, index) => (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheck(res, e, index);
            }}
          />
        </td>
        <td>{res.name}</td>
        <td>{res.country}</td>
        <td>
          <a href={`${res.web_pages[0]}`} target="_blank">
            {res.web_pages[0]}
          </a>
        </td>
        <td>{res.alpha_two_code}</td>
      </tr>
    ));
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ minWidth: "10%" }}>Favourite</th>
              <th style={{ minWidth: "40%" }}>University Name</th>
              <th style={{ minWidth: "20%" }}>Country</th>
              <th style={{ minWidth: "20%" }}>Website Links</th>
              <th style={{ minWidth: "10%" }}>Country Code</th>
            </tr>
          </thead>
          <tbody>{callForData()}</tbody>
        </table>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={result.length}
        paginate={paginate}
      />
    </>
  );
}
