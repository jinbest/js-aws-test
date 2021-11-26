import { useEffect, useState } from "react";
import { useParams, useRoutes } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./Home";
export const UserDetail = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchUserDetail = async (id) => {
      await axios.get(BASE_URL + "/users/" + id).then((response) => {
        setUserData(response.data.result.Items);
      });
    };
    fetchUserDetail(userId);
  }, [userId]);

  return <div>This is User Detail Page</div>;
};
