import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const PlayerCard = ({name,img,statistics}) => {


 const[showResim,setShow]=useState(true)

 return (
  <Card style={{ width: "18rem" }} className='player-kart m-auto' role="button"
  onClick={()=>setShow(!showResim)}>


  {
    showResim ?
    (<Card.Img variant="top" src={img} className='player-resim' />)
    :
    (<ul>
    {statistics.map((item,index)=>(
      <li className='h3 list-unstyled text-start'>?? {item}</li>
    )
    )}
  </ul>)
    
  }



  <Card.Footer className="text-muted">
    <Card.Title>{name}</Card.Title>
  </Card.Footer>
</Card>
);
};

export default PlayerCard;