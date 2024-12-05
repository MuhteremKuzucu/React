import React from 'react'
import DivStyle from "./style/ContainerStyle"
import Baslik, {LinkStyle} from './style/HeaderStyle'
import ButtonS, { YanciButton } from './style/ButonStyle'


const Home = () => {
  return (
    <DivStyle>
<Baslik>STYLED COMPONENTS</Baslik>

<LinkStyle href="www">LINKS</LinkStyle>


<ButtonS>TIKLA1</ButtonS>
<ButtonS fatma>TIKLA2</ButtonS>
<ButtonS>TIKLA3</ButtonS>



<YanciButton>TIKLA4</YanciButton>
<YanciButton gokhan>TIKLA5</YanciButton>
<YanciButton kazim="100px">TIKLA6</YanciButton>


    </DivStyle>
  )
}

export default Home