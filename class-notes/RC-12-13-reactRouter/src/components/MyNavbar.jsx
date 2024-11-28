import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

//!!!React ta 3 t�rl� link kullan�labilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmal�s�n�z? React uygulaman�z i�inde, etkinken stil gerektirmeyen bir ba�lant� olu�turmak istiyorsan�z, Link bile�enini kullan�n. React uygulaman�z i�inde, etkin durumdayken stil gerektiren bir ba�lant� olu�turmak istiyorsan�z, NavLink bile�enini kullan�n. Son olarak, React uygulaman�zda harici bir sayfaya veya rota olmayan bir sayfaya ba�lant� olu�turmak istiyorsan�z, <a></a>  etiketini kullan�n.

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              style={({ isActive }) => ({ color: isActive === true && "red" })}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                background: isActive === true && "aqua",
              })}
              className="nav-link"
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink 
            style={({ isActive }) => ({
                background: isActive === true && "aqua",
              })}
            className="nav-link" to="/courses">
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                fontSize: isActive === true && "50px",
              })}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/paths">
              Paths
            </NavLink>
            <Nav.Link href="https://github.com/clarusway" target="blank">
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
