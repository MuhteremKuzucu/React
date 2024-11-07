import React from 'react'

import "./Card.scss"

const Card = ({veri}) => {
  // console.log(props);
  console.log(veri);
  //! react alan�nda (ekrana basarken) d�ng� olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir

  //!map d�ng�s� kullan�lan her projede map ten sonraki ilk etikete key={id} yaz�l�r

  return (
    <div className='konteynir'>
      {veri.map((a) => (
        <div className='card' key={a.id}>
          <h1>{a.name}</h1>
          <h2>{a.job} </h2>
          <p>{a.comment} </p>
          <img src={a.img} alt="user" />
          <div className='buton-div'>
            <button className='buton-div--small'>Small</button>
            <button className='buton-div--large'>Large</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card