import React from 'react'

function Cart() {
  return (
    <>
     <div className='container' style={{ marginTop: '100px' }}>
          <div style={{ height: '70vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img style={{ width: '400px' }} className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/2854/2854521.png" alt="" srcset="" />
            <h3 className='mt-3'>Your Wishlist is Empty!!!</h3>
          </div>
          <div className='cart_summary'>
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
                  <td>1</td>
                  <td>Iphone</td>
                  <td>
                    <img style={{width:"40px",height:"30px"}} src="https://cdn.dummyjson.com/product-images/3/thumbnail.jpg" alt="" srcset="" />
                  </td>
                  <td>
                    <div>
                      <button  style={{width:"40px",height:"30px"}}>-</button>
                      <input style={{width:"40px",height:"30px"}} type="text" />
                      <button style={{width:"40px",height:"30px"}}>+</button>
                    </div>
                  </td>
                  <td>$400</td>
                  <td>
                  <i className="fa-solid fa-trash"></i>
                  </td>
                </tbody>
               <hr />
              </table> 

            </div>


           </div>

     </div>
    </>
  )
}

export default Cart