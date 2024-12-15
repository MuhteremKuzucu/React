import React from 'react'

const Typography = () => {
  return (
    <div>
       <h2 className='text-2xl ' >Tailwind css</h2>
       <h2 className='text-3xl' >Tailwind css</h2>
       <h2 className='text-5xl' >Tailwind css</h2>
       {/* standart tailwind ölçüleri dışında kullanmak için text-[25px], text-[1rem] */}
       <h2 className='text-[25px]' >Tailwind css</h2>

       <p className='text-sm'>
       Tailwind, en temel CSS kullanımlarını sıfırdan yazmanızı tekrar tekrar yazmanızı engelleyen, yazılımcıların ve tasarımcıların işini kolaylaştıran bir CSS framework’üdür. Tailwind, bir UI kiti olmadığı için Bootstrap, Foundation gibi frameworklerden farklıdır.

        <h3 className='bg-slate-500 text-3xl mt-5'>Line Clamp özelliği</h3>
       </p>
       {/* Line Clamp özelliği */}
       <p className='line-clamp-2  hover:line-clamp-none'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis in repellendus minus accusamus tenetur ipsa, pariatur dolor excepturi impedit inventore atque. Quo esse dolorem provident quae? Odio iure dicta ut. Modi, quae alias quisquam veniam, porro sunt suscipit quaerat eius dignissimos accusamus exercitationem eaque pariatur, blanditiis quos? Ea soluta aperiam facere maiores dolorem, nam aliquam velit totam exercitationem atque porro ipsum possimus animi reprehenderit dolorum deleniti aspernatur labore impedit corporis quaerat autem pariatur! Nemo reiciendis laboriosam incidunt ea fugiat et distinctio. Veniam quisquam iste incidunt deserunt, nulla assumenda quidem libero autem possimus quia aut sequi molestiae vero dicta totam laborum!
       </p>

        <h3 className='bg-red-500 mt-5'>Tailwind Renkler</h3>
        <p className='text-teal-800 bg-gray-500'>Tailwind renkleri</p>
        <p className='bg-[rgb(207,136,208)]'>Tailwind rgb renk kullanımı</p>

        <p className='bg-[#9cb88e]'>Tailwind ile hexadecimal renk kullanımı</p>

    </div>
  )
}

export default Typography