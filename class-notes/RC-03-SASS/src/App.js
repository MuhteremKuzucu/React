import React from 'react'
import "./App.scss"
import Card from './components/card/Card'
import dataA from "./data"
import Header from './components/header/Header'

const App = () => {
  
  

  return (
    <div>
      <Header/>
      <Card veri={dataA} />
    </div>
  )
}

export default App