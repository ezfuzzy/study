import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("/v2/posts")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const url = event.target.action;
    const formData = new FormData(event.target);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    // const jsonString = JSON.stringify(formObject);

    // formObject가 알아서 json 문자열로 변경됨
    // object or query 중에 하나 전달하면 됨.
    axios
      .post(url, formObject)
      .then((res) => {
        this.getPosts();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDelete = (postId) => {
    axios
      .delete(`/v2/posts/${postId}`)
      .then((res) => {
        this.setState({
          posts: this.state.posts.filter((post) => res.data.id !== post.id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleEdit = (post) => {
    const title = prompt(post.id + "번 글의 수정할 제목 입력");

    const obj = {
      title: title,
      author: post.author,
    };

    axios
      .put(`/v2/posts/${post.id}`, obj)
      .then((res) => this.getPosts())
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>post page</h1>
        <form action="/v2/posts" method="post" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="author">author</label>
            <input type="text" name="author" id="author" />
          </div>
          <button type="submit">post</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>author</th>
              <td>edit</td>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>
                  <button onClick={() => this.handleEdit(post)}>edit</button>
                </td>
                <td>
                  <button onClick={() => this.handleDelete(post.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
