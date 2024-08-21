import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';
import "../style.css"
import React,{useState} from 'react';

function NavScroll({SearchFilter}) {
    const [value, setvalue] = useState("")
    const OnSearch =(e)=>{
        // e.preventDefault();
        SearchFilter(value)
        setvalue("")
    }
    return (
        <Row>
            <Navbar bg='dark' variant='dark' expand="lg" >
            <Container >
            <Navbar.Brand href="#">
                <div className='brand-color'>
                مـطـعـم جـديـد
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
                
            </Nav>
            <Form className="d-flex">
                <Form.Control  value = {value} onChange={(e)=>setvalue(e.target.value)} type="text"placeholder="ابحـث"className="me-2"/>
                <button onClick={()=> OnSearch()} className='btn-search me-3'>بحـث</button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Row>
    );
}

export default NavScroll;