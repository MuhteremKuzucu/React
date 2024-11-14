import React, { useState } from 'react'
// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.
const Form = () => {
    
    const[isim,setIsim]=useState("")
    const[pass,setPass]=useState("")
    const[country,setCountry]=useState("")

const gonderDatabase=(e)=>{
  e.preventDefault();
  //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
  //? const res = axios.post("url", { isim, pass, country })
  alert(`name:${isim}  password: ${pass} country : ${country}`);
  //!database e yollandıktan sonra değişkenlerin içini temizledik, bunu ekranda da temiz görmek için inputlarda value değişkenleri tanımladık
  setIsim("");
  setPass("");
}



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
           onInput={(e)=>setIsim(e.target.value)}
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
           onChange={(p)=>setPass(p.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="country">
            COUNTRY: <span className="text-danger">{country} </span>
          </label>
          <select
      onChange={(c)=>setCountry(c.target.value)}
            className="form-select"
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
}

export default Form