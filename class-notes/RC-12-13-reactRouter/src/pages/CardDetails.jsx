import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.js"

const CardDetails = () => {

  const{namee}=useParams()

  return (
    <div className='text-center'>
      {data.map((a)=>a.name===namee && (
        <div>
          <h3>{a.name}</h3>
          <img width="300px" src={a.img} alt="" />

          <h3>{a.text}</h3>
          <h4>{a.yorum}</h4>
        </div>
      ))}
    </div>
  )
}

export default CardDetails