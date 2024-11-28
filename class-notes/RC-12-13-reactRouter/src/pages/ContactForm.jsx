import React, { useState } from "react";

const ContactForm = () => {
  const [isim, setIsim] = useState("");
  const [pass, setPass] = useState("");

  const gonderDatabase = (e) => {
    e.preventDefault();
  
    alert(`name:${isim}  password: ${pass} `);
   
    setIsim("");
    setPass("");
  };

  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>LOG IN</h1>

      <form onSubmit={gonderDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger">{isim} </span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            onInput={(e) => setIsim(e.target.value)}
            value={isim}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD : {pass}
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            value={pass}
            onChange={(p) => setPass(p.target.value)}
          />
        </div>

      
        <button type="submit" className="btn btn-danger">
        Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;