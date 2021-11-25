import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const BASE_URL = "http://localhost:3000";

export const UserDetail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchUserDetail = async (id) => {
      await axios.get(BASE_URL + "/users/" + id).then((response) => {
        setUserData(response.data.result.Items);
      });
    };
  }, [id]);

  return <div>This is User Detail Page</div>;
};
