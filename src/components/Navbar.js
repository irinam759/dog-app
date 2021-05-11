import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';


class About extends React.Component{
    constructor(props){
        super(props);
       
    }
    
        render(){
            return(
          
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/#/">Dog App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#/">Dogs gallery</Nav.Link>
                        <Nav.Link href="/#/about">About</Nav.Link>
                    </Nav>
                    
    
                </Navbar.Collapse>
                </Navbar>
            )
    
        }
    }
    
           


export default About;      