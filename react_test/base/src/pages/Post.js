import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = (postNum) => {
    navigate(`/posts/${postNum}/update`);
  };

  const handleDelete = (postNum) => {
    axios
      .delete(`/api/posts/${postNum}`)
      .then((res) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.num !== postNum));
        console.log(postNum, "is deleted.");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Post page</h1>
      <Link className="btn btn-primary my-3" to="/posts/new">add post</Link>
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
          {posts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <Button variant="info" onClick={() => handleUpdate(item.id)}>edit</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>X</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Post;
