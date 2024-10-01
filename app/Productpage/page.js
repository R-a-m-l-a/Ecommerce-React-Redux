"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationpanel from '../components/Navigationpanel'
import { add } from '../store/cartSlice';
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productSlice';

const Product = () => {
const {data: product, status}=useSelector(state=> state.products);
    useEffect(() => {
 
      dispatch(getProducts()); 
 },[]
);
if(status==='Loading'){
  return <p>Loading...</p>
}
else if(status==='error'){
  return <p>Something went wrong. Try again Later</p>
}
    

const dispatch=useDispatch();
const addToCart=(elem)=>{
  dispatch(add(elem))
 
};

    
  return (
    <>
    <Navigationpanel/>
     
    <div className='row text-center pl-7'>
        {product.map((elem,i)=>{
return <div className='col-md-3' style={{marginBottom: '10px'}}>
      <Card className='h-100' key={elem.id} style={{ width: '18rem' }}>
        <div className='pl-24 pt-10 pb-6'>
      <Card.Img className='cardimage'  variant="top" src={elem.image} style={{width: '100px', height: '130px'}} />
      </div>
      <Card.Body>
     
      </Card.Body>
      <Card.Footer className='text-center bg-white'>
        <div>
      <Card.Text className='alltext text-center font-mono text-xs'>{elem.title}</Card.Text>
      
        <Card.Text className='alltext text-center font-mono text-xs font-bold'>
        {elem.price}$
        </Card.Text>
        </div>
      <Button className='mt-2' variant="dark" onClick={()=>{addToCart(elem)
      }}>Add To Cart</Button>
      </Card.Footer>
    </Card>
</div>
        })}
    </div>
    
</>  )
}

export default Product