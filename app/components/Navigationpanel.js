import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react'
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { IoBagCheckOutline } from "react-icons/io5";




const Navigationpanel = () => {
  const router = useRouter();
  const handleBag=()=>{
    router.push("/Cardpage"); // Navigate to another page

  }

  const productsInBag=useSelector(state=>state.cart); //useselector reads the changes in redux store and update them on the UI
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand >Redux</Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link href='/Productpage'>Products </Nav.Link>
            </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
         <Navbar.Text>
            {/* <Nav.Link>My bag {productsInBag.length}</Nav.Link> */}
        
          <button className='font-extrabold flex' onClick={handleBag}>
          <IoBagCheckOutline style={{fontSize: '29px'}}/>{productsInBag.length}</button>

        
         </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Navigationpanel