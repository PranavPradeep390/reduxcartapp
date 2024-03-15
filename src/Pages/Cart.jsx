import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, incQuantity, removeCartItem ,emptyCart} from '../REDUX/Slices/cartSlice'
import { Link } from 'react-router-dom'
function Cart() {
  const cartItems = useSelector(state=>state.cartReducer)
  const [cartTotal,setcartTotal]= useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(cartItems?.length>0){
      setcartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setcartTotal(0)
    }
  },[cartItems])

  const handleDecrementQuantity =(product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  return (
    <>
    <Header/>
      <div className='container' style={{ marginTop: '100px' }}> 

       { 
          cartItems?.length>0?
          <div className='pt-5'>
            <h3>Cart Summary</h3>
            <div className='d-flex'>
              <div>
                <table style={{width:"1000px",height:"200px",margin:"auto",border:"2px",borderColor:"black"}}>
                  <thead>
                   <tr >
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                   </tr>
                  </thead>
                  <hr />
              <tbody >
              {
                cartItems?.map((product,index)=>(
                  <tr className='controw'>
                      <td>{index+1}</td>
                      <td>{product.title.slice(0,16)}...</td>
                      <td>
                        <img style={{width:"40px",height:"30px"}} src={product.thumbnail} alt="" srcset="" />
                      </td>
                      <td>
                        <div>
                        <button onClick={()=>handleDecrementQuantity(product)} className='btn text-dark me-2' style={{width:"40px",height:"40px",padding:'10px'}}>-</button>
                          <input value={product.quantity} style={{width:"40px",height:"40px",textAlign:'center'}} type="text" />
                          <button onClick={()=>dispatch(incQuantity(product?.id))} className='btn text-dark ms-2' style={{width:"40px",height:"40px",padding:'10px'}}>+</button>
                        </div>
                      </td>
                      <td>${product.totalPrice}</td>
                      <td>
                     <button className='btn' onClick={()=>dispatch(removeCartItem(product?.id))}> <i className="fa-solid fa-trash text-primary"></i></button>
                      </td>
              </tr>
                ))
  
              }
              </tbody>
                 <hr />
                </table> 
                <div className='float-end mt-3'>
                  <button onClick={()=>dispatch(emptyCart())} className='btn btn-primary'>EMPTY CART</button>
                  <Link className='btn btn-info ms-5' to={'/'}>Shop More</Link>
                </div>
  
              </div>
              <div className="box shadow d-flex align-item-center justify-content-center flex-column csum">
                <h5>Total items in Cart:{cartItems.length}</h5>
                <h5>Checkout Price:${cartTotal}</h5>
                <button className="btn" style={{width:'250px'}}>Checkout</button>
              </div>
  
            </div>
           </div>
:
          <div style={{ height: '70vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img style={{ width: '400px' }} className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/2854/2854521.png" alt="" srcset="" />
            <h3 className='mt-3'>Your Cart is Empty!!!</h3>
          </div>
       }

      </div>
    </>
  )
}

export default Cart