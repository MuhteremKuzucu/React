import React, { useEffect } from 'react'
import KpiCard from '../components/KpiCard'
import Charts from '../components/Charts'
import useStockCall from '../hook/useStockCall'


const Home = () => {

  const {getPurcSales}=useStockCall()

  useEffect(()=>{
    getPurcSales()
  },[])


  return (
    <div>
      <KpiCard/>
      <Charts/>
    </div>
  )
}

export default Home