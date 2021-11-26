import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./Home";

export const UserDetail = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchUserDetail = async (id) => {
      await axios.get(BASE_URL + "/users/" + id).then((response) => {
        setUserData(response.data.result.Items[0]);
      });
    };
    fetchUserDetail(userId);
  }, [userId]);

  return (
    <div>
      <Link to="/">
        <button className="btn-comeback">Come Back</button>
      </Link>
      <h2>This is User Edit Page</h2>
      <div className="user-list">
        {userData && (
          <div className="user-wrapper" key={userData.id}>
            <div className="user-firstName">{userData.firstName}</div>
            <div className="user-lastName">{userData.lastName}</div>
            <div className="user-email">{userData.email}</div>
          </div>
        )}
      </div>
    </div>
  );
};
