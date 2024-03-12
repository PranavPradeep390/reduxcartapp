import React, { useState } from 'react'
import Header from '../Components/Header'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../REDUX/Slices/wishlistSlice'

function View() {
  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  const [product,setProduct]= useState({})
  const {id} = useParams()

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
     ( setProduct.getItem("allProducts"))
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
                <Button onClick={()=>handleWishList(product)}  variant="info"> <i className="fa-regular fa-heart me-1"></i> <Link to={'/wishlist'} style={{textDecoration:"none"}}>Add To Wishlist</Link></Button>{' '}
                <Button variant="info"> <i className="fa-solid fa-cart-shopping me-1"></i> <Link to={'/cart'} style={{textDecoration:"none"}} >Add To Cart</Link></Button>{' '}

                </div>

            </div>

          </div>

      </div>
    </>
    )
   
}

export default View



