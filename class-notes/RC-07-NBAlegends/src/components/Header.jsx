import React from 'react'
import { Container, Image } from 'react-bootstrap'
import nbaLogo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container className='my-3'>
        <Image src={nbaLogo} width="200px"/>
        <h1 className='my-1 font-monospace display-4 fw-bold font-monospace'>NBA Legends</h1>
    </Container>
  )
}

export default Header