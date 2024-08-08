import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Member = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/members")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = (memberNum) => {
    navigate(`/members/${memberNum}/update`);
  };

  const handleDelete = (memberNum) => {
    axios
      .delete(`/api/members/${memberNum}`)
      .then((res) => {
        setMembers((prevMembers) => prevMembers.filter((member) => member.num !== memberNum));
        console.log(memberNum, "is deleted.");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Member page</h1>
      <Link className="btn btn-primary my-3" to="/members/new">add member</Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>num</th>
            <th>name</th>
            <th>addr</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {members.map((item) => (
            <tr key={item.num}>
              <td>{item.num}</td>
              <td>{item.name}</td>
              <td>{item.addr}</td>
              <td>
                <Button variant="info" onClick={() => handleUpdate(item.num)}>edit</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.num)}>X</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Member;
