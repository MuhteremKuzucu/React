import React, { useEffect, useState } from 'react'

import axios from "axios"
// https://jsonplaceholder.typicode.com/users
const Teacher = () => {
 const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        {user.map(({ id, name, username }) => (
          <div
            className="col col-12 col-sm-6 col-md-4 bg-danger-subtle border border-3 m-2 rounded-5"
            key={id}
          >
            <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${id}`}
              alt=""
              className="w-50"
            />
            <h3>{name}</h3>
            <p>{username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teacher