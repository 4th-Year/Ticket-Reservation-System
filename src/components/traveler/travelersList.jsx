import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TravelersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((users) => setUsers(users));

    function getUsers() {
      axios
        .get("")
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUsers();
  }, []);

  const handleDeactivateProfile = () => {
    if (window.confirm("Are you sure you want to deactivate your profile?")) {
      axios
        .put("/api/deactivateProfile")
        .then((response) => {
          console.log("Profile deactivated successfully");
        })
        .catch((error) => {
          console.error("Error deactivating profile: ", error);
        });
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="top-50 text-2xl font-semibold mb-4">Users</h1>
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4">NIC</th>
            <th className="py-2 px-4">First Name</th>
            <th className="py-2 px-4">Last Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Mobile Number</th>
            <th className="py-2 px-4">Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.nic}</td>
              <td className="py-2 px-4">{user.firstname}</td>
              <td className="py-2 px-4">{user.lastname}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.mobile}</td>
              <td className="py-2 px-4">{user.gender}</td>
              <td className="py-2 px-4">
                <Link to="/traveler/editProfile">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
                    Update
                  </button>
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                  onChange={handleDeactivateProfile}
                >
                  Deactivate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
