import React from "react";

const Events = () => {
  //!javascript alanı
  let baslik = "MERHABA";
  let sayac = 0;

  const arttir = () => {
    sayac = sayac + 1;
    console.log(sayac);
    document.querySelector("span").textContent = sayac;
  };

  const changeBaslik = (title) => {
    baslik = title;
    console.log(baslik);

    document.querySelector("h1").textContent = title;
  };

  const click = () => {
    document.querySelector(".btn-danger").textContent = "TIKLANDI";
  };

  //? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
  //? 1- Herhangi bir state degisirse
  //? 2- Props degisirse
  //? 3- Refresh force edilirse (tercih edilen bir durum olmaz)
  return (
    //!jsx (react) alanı
    <div className="container text-center mt-4">
      <h1>INFO: {baslik}</h1>

      <h2>
        COUNT: <span className="text-danger">{sayac} </span>
      </h2>

      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>

      <button onClick={() => changeBaslik("HALLO")} className="btn btn-info">
        BASLIK DEĞİŞTİR
      </button>

      <button onClick={click} className="btn btn-danger">
        TIKLA
      </button>
    </div>
  );
};


//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------
export default Events;
