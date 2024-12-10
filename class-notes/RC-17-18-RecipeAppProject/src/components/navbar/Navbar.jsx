import React, { useState } from "react";
import { Nav, Logo, Menu, MenuLink, Hamburger } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        {"<Clarusway/>"} <span>Recipe</span>{" "}
      </Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu ackapa={open} >
        <MenuLink to="/about">About</MenuLink>

        {/* Dışarıdaki harci bir sayfaya Link ile gidemem o yüzden menulink kullnamıyoruz */}
        {/* <MenuLink to="">Github</MenuLink> */}
        <a href="https://www.github.com" target="_blank">
          Github
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
