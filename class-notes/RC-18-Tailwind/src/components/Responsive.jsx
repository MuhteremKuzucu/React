import React from 'react'

const Responsive = () => {
  return (
    <div>
        <h3>Responsive</h3>
        <div className='flex flex-wrap'>
            <div className='bg-red-300 basis-1/4'>1</div>
            <div className='bg-red-500 basis-1/2'>2</div>
            <div className='bg-red-600 basis-1/2'>3</div>
            <div className='bg-red-700 basis-3/5'>4</div>
            <div className='bg-red-900 basis-1/12'>5</div>
        </div>
        <h1>Grid Yapısı</h1>
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'> */}
        {/* Bu şekilde çok class isimleri karışık göründüğü için istersek @appy yapısı kullanılabilir */}
        <div className='anasayfaGrid'>
            <div className='bg-red-300 md:text-2xl lg:text-3xl '> Tailwind grid</div>
            <div className='bg-red-500 md:bg-yellow-300 lg:bg-green-300'>2</div>
            <div className='bg-red-600 '>3</div>
            <div className='bg-red-700 '>4</div>
            <div className='bg-red-900 '>5</div>
        </div>
    </div>
  )
}

export default Responsive