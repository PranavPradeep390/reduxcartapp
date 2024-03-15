import React from 'react'
import { Badge, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProducts } from '../REDUX/Slices/productSlice';

function Header({insideHome}) {
  const dispatch = useDispatch()
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount= useSelector(state=>state.wishlistReducer).length
  return (
   <>
     <Navbar  expand="lg" className="bg-info position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand > <i className="fa-solid fa-truck-fast"></i><Link style={{textDecoration:"none"}} to={'/'}> Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
           { insideHome && <NavLink><input onChange={(e)=>dispatch(searchProducts(e.target.value.toLowerCase()))} style={{height:"50px",width:"260px",borderRadius:"10px"}} type="text" placeholder='Search Here' /></NavLink>}
            <Nav.Link>
              
              <Link to={'/wishlist'} className='text-light fw-bolder ' style={{textDecoration:"none"}}>Wishlist 
                 <Badge bg= "secondary"> {wishlistCount}</Badge>
            
            </Link>
              
            </Nav.Link>
            <Nav.Link>
              
              <Link to={'/cart'} className='text-light fw-bolder ' style={{textDecoration:"none"}}>Cart 
                 <Badge bg= "secondary">{cartCount}</Badge>
            
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