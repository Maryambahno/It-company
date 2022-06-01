import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavBarCom = () => {
  return (
      <Navbar sticky='top' bg='primary' variant='dark'>
          <Container>
              <Navbar.Brand href='#home'>
               Contact Form
              </Navbar.Brand>
          </Container>

      </Navbar>
  )
}

export default NavBarCom;