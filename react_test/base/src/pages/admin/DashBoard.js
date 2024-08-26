import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function DashBoard(props) {
  return (
    <>
      <Navbar expand="md" className="bg-primary mb-2">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Admin DashBoard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="one" />
          <Navbar.Collapse id="one">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/admin/users">
                User
              </Nav.Link>
              <Nav.Link as={NavLink} to="/members">
                Member
              </Nav.Link>
              <Nav.Link as={NavLink} to="/posts">
                Post
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cafe">
                Cafe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DashBoard;
