import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { Col,Card, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../REDUX/Slices/productSlice'

function Home() {
  const dispatch = useDispatch()
  const {allProducts,error,loading}= useSelector(state=>state.productReducer)
  console.log(allProducts,error,loading);

  useEffect(()=>{dispatch(fetchProducts())},[])
  return (
  <>
     <Header/>
     
      <div className='container' style={{marginTop:"100px"}}>
      {  
      loading?<div className='mt-5 text-center fw-bolder'> <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

      </div>
      :
        <Row>
          
     { 
     allProducts?.length>0?
     allProducts?.map(product=>(     
     <Col className="mb-5" sm={12} md={6} lg={4} xl={3} >
        <Card className="shadow rounded" style={{ width: '18rem' }}>
      <Card.Img style={{height:"180px"}} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title.slice(0,15)}...</Card.Title>
        <Link to={`/view/${product?.id}`} variant="primary">View More...</Link>
      </Card.Body>
    </Card>
        </Col>
        )):
        <div className='fw-bolder text-primary text-center mt-5 mb-5 fs-5'>Nothing to display...</div>
}
</Row>
        }
       

      </div>
  </>
  )
}

export default Home