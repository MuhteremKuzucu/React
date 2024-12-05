import React from 'react'
import data from "../data"
import ImageSSS from './styles/ImageSSS'
import KartSSS from './styles/KartSSS'

const Card = () => {
  return (
    <div>
      {data.map((a)=>(
        <KartSSS fatma={a.id%2===1 && "row-reverse"} key={a.id}>
          <div>
            <h2>{a.title}</h2>
            <p>{a.body}</p>
          </div>
          <ImageSSS src={`/images/${a.image}`} alt="" />
        </KartSSS>
      ))}
    </div>
  )
}

export default Card