import React, { useEffect, useState } from "react";
import "../App.css";
import Pagination from "./Pagination";

export default function ResultPage({
  logId,
  applicationId,
  actionType,
  applicationType,
  from,
  to,
}) {
  console.log(applicationId);
  const [result, setResult] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);
  const currentPosts1 = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  //changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setResult(data.result.auditLog);
      });
  }, []);

  //to search based on logId:
  useEffect(() => {
    if (logId) {
      const filteredItems = result.filter((item) => {
        const x = item.logId.toString();
        return x.includes(logId);
      });
      setFilteredData(filteredItems);
    }
  }, [logId]);

  //Search based on Application id:
  useEffect(() => {
    if (applicationId) {
      const filteredItems1 = result.filter((item) => {
        if (item.applicationId) {
          const x = item.applicationId.toString();
          return x.includes(applicationId);
        } else {
          setFilteredData([]);
        }
      });
      console.log(filteredItems1);
      setFilteredData(filteredItems1);
    }
  }, [applicationId]);

  //Searching based on action type:
  useEffect(() => {
    if (actionType) {
      const filteredItems1 = result.filter((item) => {
        if (item.actionType) {
          const x = item.actionType.toString();
          return x.includes(actionType);
        } else {
          setFilteredData([]);
        }
      });
      console.log(filteredItems1);
      setFilteredData(filteredItems1);
    }
  }, [actionType]);

  //search based on application type:
  useEffect(() => {
    if (applicationType) {
      const filteredItems1 = result.filter((item) => {
        if (item.applicationType) {
          const x = item.applicationType.toString();
          return x.includes(applicationType);
        } else {
          setFilteredData([]);
        }
      });
      console.log(filteredItems1);
      setFilteredData(filteredItems1);
    }
  }, [applicationType]);

  //search based on date:
  useEffect(() => {
    if (from && to) {
      const filteredItems1 = result.filter((item) => {
        if (item.creationTimestamp) {
          const x = item.creationTimestamp;
          return x > from && x < to;
        } else {
          setFilteredData([]);
        }
      });
      console.log(filteredItems1);
      setFilteredData(filteredItems1);
    }
  }, [from, to]);

  return (
    <>
      <div id="headers">
        <table>
          <thead>
            <tr>
              <th>Log Id</th>
              <th>Application Type</th>
              <th>Application Id</th>
              <th>Action</th>
              <th>Action Details</th>
              <th>Date/Time</th>
            </tr>
          </thead>
        </table>
      </div>

      {result && result.length > 0 ? (
        logId !== "" ||
        applicationId !== "" ||
        actionType !== "" ||
        applicationType !== "" ||
        from !== "" ||
        to !== "" ? (
          <div className="result">
            <table>
              <tbody>
                {currentPosts1.map((element) => (
                  <div id="data">
                    <tr key={element.logId}>
                      <td>{element.logId}</td>
                      <td>{element.applicationType}</td>
                      <td>{element.applicationId}</td>
                      <td>{element.actionType}</td>
                      <td>{element.actionDetails}</td>
                      <td>{element.creationTimestamp}</td>
                    </tr>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="result">
            <table>
              <tbody>
                {currentPosts.map((element) => (
                  <div id="data">
                    <tr key={element.logId}>
                      <td>{element.logId}</td>
                      <td>{element.applicationType}</td>
                      <td>{element.applicationId}</td>
                      <td>{element.actionType}</td>
                      <td>{element.actionDetails}</td>
                      <td>{element.creationTimestamp}</td>
                    </tr>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <h4>No data found</h4>
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={result.length}
        paginate={paginate}
      />
    </>
  );
}
