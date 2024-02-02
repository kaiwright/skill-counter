import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Data from './pages/data';
import NavbarEl from './components/NavbarEl';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import './App.css'

function App() {
  return (

    <Wrapper>
      <Router>
      <NavbarEl />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
      <Footer />
    </Wrapper>

  );
}

export default App;
