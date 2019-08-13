import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "./LoginForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default App;
