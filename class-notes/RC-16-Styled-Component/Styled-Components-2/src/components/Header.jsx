import React from 'react'
import DisplaySSS from './styles/DisplaySSS'
import ImageSSS from './styles/ImageSSS'
import ButtonSSS, { YanciButton } from './styles/ButonSSS'

const Header = () => {
  return (
    <div>
      <DisplaySSS>

        <ImageSSS src="./images/logo.png" alt="" />

        <div>
          <ButtonSSS fatma="red">Apply Courses</ButtonSSS>
          <ButtonSSS muhterem>Talk to Adviser</ButtonSSS>
        </div>
      </DisplaySSS>

      <DisplaySSS>
        <div>
         <h1>The IT Career of Your Dreams Starts Here</h1>
         <p>Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.</p>
          
          <ButtonSSS muhterem>New Career</ButtonSSS>
          <YanciButton>Details</YanciButton>
        </div>

        <ImageSSS src="./images/hero.jpg" alt=""/>
      </DisplaySSS>
    </div>
  )
}

export default Header