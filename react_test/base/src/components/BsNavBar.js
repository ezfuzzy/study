import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BsNavBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);

  const handleSignIn = () => {
    // axios sign in
    // res -> dispatch
    // localStorage.token setting
    dispatch({
      type: "user_signIn",
      payload: "ezfz",
    });
  };

  const handleSignOut = () => {
    dispatch({
      type: "user_signOut",
    });
  };

  return (
    <>
      <Navbar expand="md" className="bg-success mb-2">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            EZFZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="one"></Navbar.Toggle>
          <Navbar.Collapse id="one">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/members">
                Member
              </Nav.Link>
              <Nav.Link as={NavLink} to="/posts">
                Post
              </Nav.Link>
            </Nav>
            {userName ? (
              <>
                <Nav>
                  <Nav.Link><strong>{userName}</strong></Nav.Link>
                  {/* user info page */}
                  <span className="navbar-text">Signed in</span>
                </Nav>
                <Button variant="warning" onClick={handleSignOut}>
                  Sign out
                </Button>
              </>
            ) : (
              <Button variant="primary" onClick={handleSignIn}>
                Sign in
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BsNavBar;
