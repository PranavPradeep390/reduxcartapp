import React, { useState } from 'react'
import Header from '../Components/Header'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addToCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function View() {
  const cart = useSelector(state=>state.cartReducer)
  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  const [product,setProduct]= useState({})
  const {id} = useParams()

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    //  ( setProduct.getItem("allProducts"))
     setProduct(allProducts.find(item=>item.id==id))
    }

  },[])
  // console.log(product);
  const handleWishList = (product)=>{
      if(wishlist?.includes(product)){
        alert("item already in your wishlist!!!")

      }else{
        dispatch(addWishlistItem(product))
      }
  }
   
  const handleCart = (product)=>{

    const existingProducts = cart?.find(item=>item.id==product.id)
    if(existingProducts){
      dispatch(addToCart(product))
      toast.success("Products are added to your cart!!!")
    }else{
      dispatch(addToCart(product))
    }
  }
  

  return (
    <>
      <Header/>
      <div className='container' style={{marginTop:"150px"}}>
          <div className=' row mb-5 align-items-center'>
            <div className="col-lg-6">
              <img style={{
                width:"400px",height:"200px"
              }} src={product?.thumbnail} alt="view32" />

            </div>
            <div className="col-lg-6">
                <h5>PID :{product?.id}</h5>
                <h1>{product?.title}</h1>
                <h3 className='text-primary'>${product?.price}</h3>

                <p style={{textAlign:"justify"}}> <b>Description</b> :{product?.description}</p>

                <div className='d-flex justify-content-between'>

                <button onClick={()=>handleWishList(product)}  variant="info"> <i className="fa-regular fa-heart me-1"></i>Add To Wishlist</button>{' '}

                <button onClick={()=>handleCart(product)} variant="info"> <i className="fa-solid fa-cart-shopping me-1"></i>Add To Cart</button>{' '}

                </div>

            </div>

          </div>

      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
    )
   
}

export default View