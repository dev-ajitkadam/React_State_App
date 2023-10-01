import React from 'react'
import { Container, Nav, NavItem } from 'react-bootstrap';


function NavScrollExample() {
  return (
      <header className="d-flex justify-content-center py-3 bg-black ">
        <Nav className="nav-pills">
          <NavItem>
            <Nav.Link  active>Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link >Features</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link >Pricing</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link >FAQs</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link >About</Nav.Link>
          </NavItem>
        </Nav>
      </header>
  );
}

export default NavScrollExample;