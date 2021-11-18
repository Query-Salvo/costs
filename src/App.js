import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/projects" element = {<Projects/>}/>
            <Route exact path="/contact" element = {<Contact/>}/>
            <Route exact path="/company" element = {<Company/>}/>
            <Route exact path="/newproject" element = {<NewProject/>}/>
          </Routes>
      </Container>


      <Footer/>
    </BrowserRouter> 
  );
}

export default App;
