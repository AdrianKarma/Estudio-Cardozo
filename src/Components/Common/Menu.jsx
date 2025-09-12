import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Images/logo.png'


const Menu = () => {
    return (
        <>
         <Navbar expand="lg" sticky="top" className="bg-dark w-100 navbarCustom" data-bs-theme="dark" >

      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center ms-5">
  <img
    src={logo}
    alt="Logo Estudio Cardozo"

    className="d-inline-block align-top me-2 logoNavbar"
  />
  <h2>Estudio Cardozo</h2>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
             <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
            
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Menu;