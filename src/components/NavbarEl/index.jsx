import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './style.css';

function NavbarEl() {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand>Skills Counter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="link-style">Home</Link>
            <Link to="data" className="link-style">Data</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEl;