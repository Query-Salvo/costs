import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/contact" element = {<Contact/>}/>
            <Route exact path="/company" element = {<Company/>}/>
            <Route exact path="/newproject" element = {<NewProject/>}/>
          </Routes>
      </Container>


      <p>Footer</p>
    </BrowserRouter> 
  );
}

export default App;
