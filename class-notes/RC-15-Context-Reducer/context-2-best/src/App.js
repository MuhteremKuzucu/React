import React from 'react'
import GosterUsers from './pages/GosterUsers'
import KullaniciProvider from './context/KullaniciProvider'

const App = () => {
  return (

    //! 3 context sayfassý ile butun projeyi sarmalladýk
    <KullaniciProvider>

      <GosterUsers/>

    </KullaniciProvider>
  )
}

export default App