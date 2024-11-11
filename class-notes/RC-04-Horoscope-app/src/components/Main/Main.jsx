import React from 'react'

import "./Main.scss";

import {data} from "../../helper/data"
import Card from "./Card"

// export default ile değilde her dizinin kendine özel export u varsa, import yaparken dest {} kullanılır
const Main = () => {

return (
    <div className='card-container'>

{/* {data.map((burc)=> <Card hrscp={burc}/> */}
{data.map((burc)=> <Card key={burc.id} {...burc}/>

)}

    </div>
  )
}

export default Main