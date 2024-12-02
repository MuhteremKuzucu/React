import React, { useEffect, useState } from 'react'

import axios from "axios"
import { useNavigate } from 'react-router-dom';
// https://jsonplaceholder.typicode.com/users
const Teacher = () => {
 const [user, setUser] = useState([]);
const navigatee=useNavigate()


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        {user.map((kisi) => (
          <div
            className="col col-12 col-sm-6 col-md-4 bg-danger-subtle border border-3 m-2 rounded-5"
            key={kisi.id}
          >
            <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${kisi.id}`}
              alt=""
              className="w-50"
              onClick={()=>navigatee(`/teacher/${kisi.id}`,{state:{kisi}})}
            />
            <h3>{kisi.name}</h3>
            <p>{kisi.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teacher