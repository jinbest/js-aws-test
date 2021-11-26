import { useEffect, useState } from "react";

import axios from "axios";
import { BASE_URL } from "./Home";
import { Link, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const [userData, setUserData] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    const fetchUserDetail = async (id) => {
      await axios.get(BASE_URL + "/users/" + id).then((response) => {
        setUserData(response.data.result.Items[0]);
      });
    };
    fetchUserDetail(userId);
  }, [userId]);

  const handleUpdateUser = async () => {
    await axios
      .put(BASE_URL + "/users/update/" + userId, userData)
      .then((response) => {
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
            value={userData.email}
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
            value={userData.firstName}
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
            value={userData.lastName}
            onChange={(e) => {
              setUserData({
                ...userData,
                lastName: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <button onClick={handleUpdateUser} className="btn-create">
        Update
      </button>
    </div>
  );
};
