import React, { useState } from "react";

const FormObject = () => {
 
const[bilgi,setBilgi]=useState({isim:"",pass:"",country:""})

//?dest
const{isim,pass,country}=bilgi



  const gonderDatabase = (e) => {
  
    alert(`name:${isim}  password: ${pass} country : ${country}`);
  };

  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={gonderDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger">{isim} </span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            value={isim}
            onChange={(e) =>
              setBilgi({ ...bilgi, [e.target.id]: e.target.value })
            }
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
            onChange={(e) =>
              setBilgi({ ...bilgi, [e.target.id]: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="country">
            COUNTRY: <span className="text-danger">{country} </span>
          </label>
          <select
            className="form-select"
            onChange={(e) =>
              setBilgi({ ...bilgi, [e.target.id]: e.target.value })
            }
          >
            <option selected>COUNTRIES</option>
            <option value="Türkiye">TURKEY</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};

export default FormObject;
