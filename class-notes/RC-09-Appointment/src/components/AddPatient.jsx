import React, { useState } from "react";

const AddPatient = ({ hastalar, setPatient, doktorlar }) => {
  const [hastaAdi, setName] = useState("");
  const [tarih, setTarih] = useState("");

  const kayitSubmit = (e) => {
    e.preventDefault();

    setPatient([
      ...hastalar,
      {
        id: 7,
        patientName: hastaAdi,
        day: tarih,
        isDone: false,
        myDoctor: doktorlar[0].doctorName,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={kayitSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <div>
          <button className="doc" type="submit">
            <span>{doktorlar[0].doctorName}</span> icin kayit olustur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
