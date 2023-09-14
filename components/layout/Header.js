import Link from "next/link";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Todo App</Nav.Link>
              <Link href="/today/taskcomplete">
                <Button variant="success">Completed Task</Button>
              </Link>
              <Link href="/today">
                <Button variant="danger">InComplete Task</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
