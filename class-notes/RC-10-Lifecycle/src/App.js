import "./App.css";
import Selamlama from "./components/Selamlama";
import LifeCycle from "./components/LifeCycle";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./components/Clock";
import People from "./fetch-axios/People";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/* CLass componente prop gönderdik */}
      <Selamlama isim="Life Cycle" />

      <button className="btn btn-danger" onClick={() => setShow(!show)}>
        SHOW
      </button>

      {/* {show && <LifeCycle/>}  */}
      {/* {show && <Clock/> }  */}
      {show && <People/> } 
    </div>
  );
}

export default App;
