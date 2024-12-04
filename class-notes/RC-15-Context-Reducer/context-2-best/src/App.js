import React from 'react'
import GosterUsers from './pages/GosterUsers'
import KullaniciProvider from './context/KullaniciProvider'

const App = () => {
  return (

    //! 3 context sayfass� ile butun projeyi sarmallad�k
    <KullaniciProvider>

      <GosterUsers/>

    </KullaniciProvider>
  )
}

export default App