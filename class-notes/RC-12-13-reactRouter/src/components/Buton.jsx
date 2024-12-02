import React from 'react'
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const Buton = () => {

  const navigate=useNavigate
  return (
    <div className="text-center">
      <Button
        className="btn btn-danger p-4 m-2 w-25"
        onClick={()=>navigate("/login")}
    
      >
        LOGIN
      </Button>
      <Button className="btn btn-danger p-4 m-2 w-25">KAPA</Button>
      <Button className="btn btn-danger p-4 m-2 w-25">SİL</Button>
    </div>
  );
}

export default Buton