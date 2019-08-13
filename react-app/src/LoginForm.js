/**
 * Created by lopsidedastronaut on 8/12/19.
 */
import React, { Component } from "react";
import "./LoginForm.css";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/recipes/",
      headers: {
        "Content-Type": "application/json"
      },
      data: { hello: this.state.username }
    }).then(response => console.log(response));
  }

  handleInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div className="centered">
        <div className="form-style">
          <div className="login">Login</div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="form-control"
                type="text"
                defaultValue=""
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
