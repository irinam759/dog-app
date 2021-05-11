import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import AllDogs from './pages/AllDogs';
import SingleBreed from './pages/SingleBreed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
      <HashRouter>
        <Navbar>

        </Navbar>
        <Container>
        <Route exact path="/">
          <AllDogs/>
        </Route>
        <Route exact path="/breed/:singleBreed">
          <SingleBreed />
        </Route>
        <Route exact path="/About">
         <About></About>
        </Route>
        </Container>
      </HashRouter>
  );
}

export default App;
