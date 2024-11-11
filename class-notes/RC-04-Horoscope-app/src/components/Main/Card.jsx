import React from 'react'

// const Card = ({hrscp}) => {
//  console.log(hrscp);

// const { title, image, date, desc } = hrscp;

 const Card = ({title,date,desc,image}) => {
  
  
  
  return (
    <div className='card'>
      <div className='title'>
        <h1>{title} </h1>
      </div>

      <div className='date'>
        <h1>{date} </h1>
      </div>

      <img src={image} alt="" />

      <div className='desc'>
        <p>{desc} </p>
      </div>
    </div>
  );
};

export default Card