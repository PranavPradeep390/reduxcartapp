import React from 'react'
import { Row, Col,Card, Button } from 'react-bootstrap'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addToCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Wishlist() {
  const cart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlistReducer)

  const handleCart = (product)=>{
    const existingProducts = cart?.find(item=>item.id==product.id)
    if(existingProducts){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      toast.success("Products are added to your cart!!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
    }
  }

  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '150px' }}>
       { wishlist?.length>0? 
       <Row className='mt-5'>
          {
            wishlist?.map(product=>( 
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <div className='d-flex justify-content-between'>

                  <button onClick={()=>dispatch(removeWishlistItem(product?.id))}    className='btn '><i className='fa-solid fa-heart-circle-xmark text-primary'></i></button>

                  <button onClick={()=>handleCart(product)} className='btn '><i className='fa-solid fa-cart-plus text-success'></i></button>

                </div>
              </Card.Body>
            </Card>
          </Col>))
           }
        </Row>
        :
        <div style={{ height: '70vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img style={{ width: '400px' }} className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/2854/2854521.png" alt="" srcset="" />
          <h3 className='mt-3'>Your Wishlist is Empty!!!</h3>
        </div>
       }

      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>
  )
}

export default Wishlist