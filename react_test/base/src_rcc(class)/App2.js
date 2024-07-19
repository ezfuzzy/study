import React, { Component } from "react";

class App2 extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("/v1/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data }, () => {
          console.log("get posts");
        });
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const url = event.target.action;
    const formData = new FormData(event.target);
    const queryString = new URLSearchParams(formData).toString();

    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8" },
      body: queryString,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.id + " post added ");
        this.getPosts();
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  handleDelete = (postId) => {
    fetch(`/v1/posts/${postId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          posts: this.state.posts.filter((post) => postId !== post.id),
        });
      })
      .catch((error) => console.log("error: ", error));
  };

  handleEdit = (post) => {
    const title = prompt(post.id + "번 글의 수정할 제목 입력");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", post.author);
    const queryString = new URLSearchParams(formData).toString();
    fetch(`/v1/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8" },
      body: queryString,
    })
      .then((res) => res.json())
      .then((data) => this.getPosts());
  };

  render() {
    return (
      <div>
        <h1>post page</h1>
        <form action="/v1/posts" method="post" onSubmit={this.handleSubmit}>
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

export default App2;
