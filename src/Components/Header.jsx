import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlistCount= useSelector(state=>state.wishlistReducer).length
  return (
   <>
     <Navbar  expand="lg" className="bg-info position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand Link to ={'/'}> <i className="fa-solid fa-truck-fast"></i> Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <input style={{height:"50px",width:"260px",borderRadius:"10px"}} type="text" placeholder='Search Here' />
            <Nav.Link>
              
              <Link to={'/wishlist'} className='text-light fw-bolder ' style={{textDecoration:"none"}}>Wishlist 
                 <Badge bg= "secondary"> {wishlistCount}</Badge>
            
            </Link>
              
            </Nav.Link>
            <Nav.Link>
              
              <Link to={'/cart'} className='text-light fw-bolder ' style={{textDecoration:"none"}}>Cart 
                 <Badge bg= "secondary"> 10</Badge>
            
            </Link>
              
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header