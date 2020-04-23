import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Link from  'next/link'


const HeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Main Title</Navbar.Brand>
      <Nav className="mr-auto">
        <Link href="/index" passHref>
            <Nav.Link>Main</Nav.Link>
        </Link>
        <Link href="/comments" passHref>
          <Nav.Link>Comments</Nav.Link>
        </Link>
        <Link href="/games" passHref>
          <Nav.Link>Games</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default HeaderComponent