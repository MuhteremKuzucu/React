import React, { useContext } from 'react'
import { FilmContext } from '../context/MovieContext'
import MovieCard from "../components/MovieCard";
const Main = () => {

const{filmler}=useContext(FilmContext)


console.log(filmler);
//? filmler dizisi useContext ile buraya geldi ve map le tek tek bastırılmak üzere MovieCard a gönderildi

  return (
    <div className='flex
    justify-center flex-wrap'>

{filmler.map((film)=><MovieCard key={film.id} {...film}/>)}

    </div>
  )
}

export default Main