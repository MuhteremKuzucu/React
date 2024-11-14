import React, { useState } from 'react'
import { FaComputer,FaReact} from "react-icons/fa6";
import { AiFillGooglePlusCircle } from "react-icons/ai";
 
    //! onmouseenter genellikle mouse işaretçisi bir öğeden ayrıldığında meydana gelen
    //!   olayla (onmouseleave) birlikte kullanılır .  onmouseenter,onmouseover olayına benzer  . Aradaki fark, onmouseenter
    //!   olayının
    //!   bubble olmamasıdır (belge hiyerarşisini yukarıya taşımaz, child a ve parent a aynı olayı verdiğinizde herkes kendi alanında çalışır, child dan parent etkilenmez) 
 

const MouseKeyboard = () => {

   const[xEkseni,setX]=useState(0) 
   const[yEkseni,setY]=useState(0) 
const[inputVeri,setInput]=useState("")


const mouseOlaylari=(e)=>{
console.log(e.pageX, e.pageY);

 setX(e.pageX)
 setY(e.pageY)

}

  return (
    <div onMouseMove={mouseOlaylari} className="container text-center mt-4 d-flex flex-column align-items-center">
      {" "}
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">{xEkseni} {yEkseni}</p>
      
      <div onMouseMove={mouseOlaylari} className="bg-success text-light w-50 p-4" id="coord">
        <FaComputer className='m-2 text-danger ' />
        KOORDİNATLAR <FaReact className='text-dark'/> <AiFillGooglePlusCircle />
      </div>

      <div>
        <h2 className="text-danger mt-4">
          Keyboard-Clipboard Events <span className="text-primary">{inputVeri} </span>
        </h2>

        <input type="text" className="form-control" 
onChange={(e)=> setInput(e.target.value)}


onKeyDown={(e)=> (e.keyCode>=48 && e.keyCode<=57) ? alert("tebrikler rakam girdiniz"):alert("rakam dışında bir tuşa bastınız")}

        />
      </div>
    </div>
  );
}

export default MouseKeyboard