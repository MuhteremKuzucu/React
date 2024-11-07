import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './components/MyNavbar';
import Slider from './components/Slider';

import MyCard from './components/MyCard';

import dataA from "./data"


const App = () => {
  return (
    <div>
    <MyNavbar/>

    <Slider/>

    <MyCard veri={dataA}/>
    </div>
  )
}

export default App