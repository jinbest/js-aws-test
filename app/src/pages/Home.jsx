import React, { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3000";
const mockData = [
  {
    id: "c796d733-9779-45c5-a130-20fd1fd0b652",
    firstName: "Jin",
    lastName: "Zheng",
    email: "jin.bestvictoria718@gmail.com",
  },

  {
    id: "c796d733-9779-45c5-a130-dwer32wedrewer",
    firstName: "Karlman",
    lastName: "Filter",
    email: "example@gmail.com",
  },
];

export const Home = () => {
  const [users, setUsers] = useState(mockData);
  useEffect(() => {
    const fetchUsers = async () => {
      await axios.get(BASE_URL + "/users/getAll").then((response) => {
        setUsers(response.data.result.Items);
      });
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    await axios.delete(BASE_URL + "/users/delete/" + userId).then((res) => {
      setUsers(res.data.result.Items);
    });
  };

  return (
    <div className="layout">
      <h2>All Users</h2>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-wrapper">
            <div className="user-firstName">{user.firstName}</div>
            <div className="user-lastName">{user.lastName}</div>
            <div className="user-email">{user.email}</div>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
