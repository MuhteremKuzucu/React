import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";

//! 1 context alaný acýyoruz

export const StudentContext = createContext();

const App = () => {
  const [students, setStudents] = useState(data);

  const changeColor = (id, newRenk) => {
    setStudents(
      students.map((a) => a.id === id ? { ...a, color: newRenk } : a)
    );
  };

  return (
    //! 2 butun projeye gonderilebilsin diye ilk olarak home sayfasýný gonderilecek verilerle ve context ile sarmallayalým

    <StudentContext.Provider value={{ students, changeColor }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
