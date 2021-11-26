import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <h2>This is User Detail Page</h2>
      {userData && (
        <div className="user-wrapper" key={userData.id}>
          <div className="user-firstName">{userData.firstName}</div>
          <div className="user-lastName">{userData.lastName}</div>
          <div className="user-email">{userData.email}</div>
        </div>
      )}
    </div>
  );
};
