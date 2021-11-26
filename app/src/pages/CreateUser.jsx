import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "./Home";
import { Link } from "react-router-dom";

export const CreateUser = () => {
  const [userData, setUserData] = useState({});
  const handleCreateUser = async () => {
    await axios.post(BASE_URL + "/users/", userData).then((response) => {
      console.log("response: ", response);
    });
  };
  return (
    <div>
      <Link to="/">
        <button className="btn-comeback">Come Back</button>
      </Link>
      <h2>This is create page</h2>
      <div className="user-list">
        <div className="detail-field">
          <label className="detail-label">Email:</label>
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="detail-field">
          <label className="detail-label">First Name:</label>
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                firstName: e.target.value,
              });
            }}
          />
        </div>
        <div className="detail-field">
          <label className="detail-label">Last Name:</label>
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                lastName: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <button onClick={handleCreateUser} className="btn-create">
        Create
      </button>
    </div>
  );
};
