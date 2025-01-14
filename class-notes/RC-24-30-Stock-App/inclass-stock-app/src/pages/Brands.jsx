import React from 'react'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'

const Brands = () => {

  const {getStockData}=useStockCall()

  useEffect(()=>{

    getStockData("brands")

  },[])

  return (
    <div>Brands</div>
  )
}

export default Brands