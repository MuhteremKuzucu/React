import React, { useState } from 'react'
import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'

import Data from "../helper/Data"

const Home = () => {

  const [yapilacak,setYapilacak]=useState(Data)

  return (
    <div>
      <GorevEkle setYapilacak={setYapilacak} yapilacak={yapilacak}/>

      <GorevleriGoster yapilacak={yapilacak} setYapilacak={setYapilacak}/>
    </div>
  )
}

export default Home