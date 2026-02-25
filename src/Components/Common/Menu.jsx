import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Images/logo.png";

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expanded && navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [expanded]);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      ref={navRef}
      expand="lg"
      sticky="top"
      className="bg-dark w-100 navbarCustom"
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo Estudio Cardozo"
            className="d-inline-block align-top me-2 logoNavbar"
          />
          <h2>Estudio Cardozo</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5" onClick={closeMenu}>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#Areas">Servicios</Nav.Link>
            <Nav.Link href="#AboutMe">Nosotros</Nav.Link>            
            <Nav.Link href="#ContactMe">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;