import React from 'react'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'

function Cart() {
  const cartItems = useSelector(state=>state.cartReducer)
  return (
    <>
    <Header/>
      <div className='container' style={{ marginTop: '100px' }}> 

       { 
          cartItems?.length>0?
          <div className='pt-5'>
            <h3>Cart Summary</h3>
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
                <tr>
                    <td>{index+1}</td>
                    <td>{product.title.slice(0,16)}...</td>
                    <td>
                      <img style={{width:"40px",height:"30px"}} src={product.thumbnail} alt="" srcset="" />
                    </td>
                    <td>
                      <div>
                        <button  style={{width:"40px",height:"30px"}}>-</button>
                        <input value={product.quantity} style={{width:"40px",height:"30px"}} type="text" />
                        <button style={{width:"40px",height:"30px"}}>+</button>
                      </div>
                    </td>
                    <td>${product.totalPrice}</td>
                    <td>
                   <button className='btn'> <i className="fa-solid fa-trash text-primary"></i></button>
                    </td>
            </tr>
              ))

            }
            </tbody>
               <hr />
              </table> 

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