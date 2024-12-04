import React, { createContext, useEffect, useState } from "react";

//! 1 create context

export const KullaniciContext = createContext();

const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((veri) => setUsers(veri));
  }, []);
  
  const changeWidth=(tc, size)=>{

    setUsers(users.map((a)=>a.id===tc ? {...a, width:size}:a))
    
    }

  return (
    //! context aalný ile sarmalllayarak cocuklara veri gonderilebilir demiþ olduk
    <KullaniciContext.Provider value={{users,changeWidth}}>
      {children}
    </KullaniciContext.Provider>
  );
};

export default KullaniciProvider;
