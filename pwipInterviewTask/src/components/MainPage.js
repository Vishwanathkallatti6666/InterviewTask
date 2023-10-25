import { useState } from "react";
import "../App.css";
import React from "react";
import ResultPage from "./ResultPage";

export default function MainPage() {
  const [logId, setLogId] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [actionType, setActionType] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <>
      <div>
        <h5 id="nav">Home-Administrator-Logger Search</h5>

        <div id="Filter-names">
          <span>Log Id</span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ActionType
          </span>
          <span>Application Type</span>
          <span>From Date</span>
          <span>To Date</span>
          <span>Application Id</span>
        </div>
      </div>
      <div id="Filter-text">
        <input
          type="text"
          placeholder="Log Id"
          onChange={(e) => {
            setLogId(e.target.value);
          }}
        />
        <select
          id="Action Type"
          onChange={(e) => setActionType(e.target.value)}
        >
          <option value=""> </option>
          <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
          <option value="DARI_APP_LOGIN">DARI_APP_LOGIN</option>
          <option value="INITIATE_APPLICATION">INITIATE_APPLICATION</option>
          <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>
          <option value="SUBMIT_APPLICATION">SUBMIT_APPLICATION</option>
          <option value="ADD_EMPLOYEE">ADD_EMPLOYEE</option>
        </select>

        <select
          id="Application Type"
          onChange={(e) => setApplicationType(e.target.value)}
        >
          <option value=""> </option>
          <option value="CERT_TITLE_DEED_PLOT">CERT_TITLE_DEED_PLOT</option>
          <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>
          <option value="ADD_POA">ADD_POA</option>
          <option value="ADD_COMPANY">ADD_COMPANY</option>
          <option value="ADD_COMPANY_EMPLOYEE">ADD_COMPANY_EMPLOYEE</option>
          <option value="CERT_PROP_OWNERSHIP">CERT_PROP_OWNERSHIP</option>
        </select>

        <input
          type="date"
          id="dateInput"
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="date"
          id="dateInput1"
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Application Id"
          onChange={(e) => {
            setApplicationId(e.target.value);
          }}
        />
        <input
          type="button"
          id="search-logger-btn"
          value="Search Logger"
        ></input>
      </div>

      <ResultPage
        logId={logId}
        applicationId={applicationId}
        actionType={actionType}
        applicationType={applicationType}
        from={from}
        to={to}
      />
    </>
  );
}
