import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

//!!!React ta 3 türlü link kullanýlabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalýsýnýz? React uygulamanýz içinde, etkinken stil gerektirmeyen bir baðlantý oluþturmak istiyorsanýz, Link bileþenini kullanýn. React uygulamanýz içinde, etkin durumdayken stil gerektiren bir baðlantý oluþturmak istiyorsanýz, NavLink bileþenini kullanýn. Son olarak, React uygulamanýzda harici bir sayfaya veya rota olmayan bir sayfaya baðlantý oluþturmak istiyorsanýz, <a></a>  etiketini kullanýn.

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
