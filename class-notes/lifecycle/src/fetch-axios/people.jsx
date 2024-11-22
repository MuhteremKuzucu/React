import React, { useEffect, useState } from "react";

const People = () => {
  const [user, setUser] = useState([]);

  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((data)=>data.json())
  //   .then((veri)=>setUser(veri))

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((veri) => setUser(veri));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {user.map(({ id, name, username }) => (
          <div className="col col-12 col-sm-6 col-md-4 bg-danger-subtle border border-3 m-2 rounded-5" key={id}>
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
};

export default People;
