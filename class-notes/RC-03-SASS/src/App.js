import React from 'react'
import "./App.scss"
import Card from './components/card/Card'
import dataA from "./data"

const App = () => {
  
  

  return (
    <div>
      <Card veri={dataA} />
    </div>
  )
}

export default App