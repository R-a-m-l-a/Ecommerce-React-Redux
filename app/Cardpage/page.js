"use client"
import React from 'react'
import Navigationpanel from '../components/Navigationpanel'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

import { BsBagX } from "react-icons/bs";



const page = () => {
    const productsInBag=useSelector(state=>state.cart); //useselector reads the changes in redux store and update them on the UI
const dispatch=useDispatch();

    const removeItemFromCart=(id)=>{
     dispatch(remove(id));
}
if(productsInBag.length==0)
    {
        return <>
        <Navigationpanel/>
        <h1 className='text-center font-serif pb-36'>Shopping Cart</h1>
        <h1 className='d-flex justify-content-center align-items-center'  style={{fontSize: '90px'}}><BsBagX /></h1>
         <h1 className='text-center font-serif'>Your Cart Is Empty</h1>
         <p className='text-center'>Before proceed to checkout you must add some products to your shopping cart.
You will find a lot of interesting products on our "Products" page.</p>

         </>
    }
    else{

  return (
    <>
    <Navigationpanel/>

    <h1 className='text-center font-serif'>Shopping Cart</h1>
   

    <div className='row'>
        {productsInBag.map((elem,i)=>{
return <div className='col-md-12' style={{marginBottom: '10px'}}>
      <Card className='h-100 text-center' key={elem.id} style={{ width: '18rem' }}>
        <div className='pl-24 mt-5'>
      <Card.Img variant="top" src={elem.image} style={{width: '100px', height: '130px'}} />
      </div>
      <Card.Body>
       
      </Card.Body>
      <Card.Footer className='bg-white'>
      <div>
      <Card.Text className='alltext text-center font-mono text-xs'>{elem.title}</Card.Text>
      
        <Card.Text className='alltext text-center font-mono text-xs font-bold'>
        {elem.price}$
        </Card.Text>
        </div>
      <Button className='mt-2' variant="danger" onClick={()=>{removeItemFromCart(elem.id)
      }}>Remove Item</Button>
      </Card.Footer>
    </Card>
</div>
        })}

    </div>
    
    </>
    
  )}
}

export default page