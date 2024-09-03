import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar, Table } from "react-bootstrap";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  const handleUpdate = () => {
    // edit user info
  };

  const handleDelete = () => {
    // delete user info
  };

  useEffect(() => {
    axios
      .get("/api/admin/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

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

      <h1>User manage page</h1>
      <Link className="btn btn-primary my-3" to="/users/new">
        add user
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>userName</th>
            <th>password</th>
            <th>email</th>
            <th>role</th>
            <th>regdate</th>
            <th>profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.password}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.regdate}</td>
              <td>{item.profile}</td>
              <td>
                <Button variant="info" onClick={() => handleUpdate(item.id)}>
                  edit
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
