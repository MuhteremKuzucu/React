import React from 'react'

//!1.yol
// const Message = (props) => {

//    console.log(props);//props.isim
//    //!destructuring

//  const{isim,telefon}= props



const Message = ({isim,telefon}) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Benim adım {isim} telefon numaram {telefon}
      </h1>
    </div>
  );
};

export default Message