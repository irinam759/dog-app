
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter , Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import DogsGallery from './pages/DogsGallery';
import SingleBreed from './pages/SingleBreed';

function App() {
  return (
    <HashRouter>
        <Container> 
   <Navbar bg="light" expand="lg">
      <Navbar.Brand>Dogs App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#/dogsGallery">Breeds</Nav.Link>
              <Nav.Link href="/#/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Route exact path='/dogsGallery'>
       <DogsGallery></DogsGallery>
      </Route>
      <Route exact path='/about'>
        <About></About>
        
       
      </Route>
      <Route exact path='/dogsGallery/:dogId'>
      <SingleBreed></SingleBreed>
        
      </Route>
      </Container>
    </HashRouter>
  );
}

export default App;
