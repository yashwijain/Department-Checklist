import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isSignUp: true, // Initially, set to Sign Up
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleToggleMode = () => {
    // Toggle between Sign Up and Log In modes
    this.setState((prevState) => ({ isSignUp: !prevState.isSignUp }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Access username and password from this.state
    const { username, password, isSignUp } = this.state;

    if (isSignUp) {
      // Implement sign-up logic here
      console.log("Signing up with username:", username);
      console.log("Password:", password);
    } else {
      // Implement log-in logic here
      console.log("Logging in with username:", username);
      console.log("Password:", password);
    }
  };

  render() {
    const { username, password, isSignUp } = this.state;
    const buttonText = isSignUp ? "Sign Up" : "Log In";

    return (
      <html>
        <head>
          <title>{isSignUp ? "Sign Up" : "Log In"}</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          />
        </head>

        <body>
          <div className="container">
            <div className="left-column">
              <div className="grid-container">
                <div className="grid-item">
                  <div className="username">
                    <label htmlFor="username-input">Username:</label>
                  </div>
                  <input
                    type="text"
                    id="username-input"
                    name="username-input"
                    placeholder="Enter your username"
                    required
                    value={username}
                    onChange={this.handleUsernameChange}
                    style={{ width: "220px", height: "35px" }}
                  />
                </div>

                <div className="grid-item">
                  <div className="password">
                    <label htmlFor="password-input">Password:</label>
                  </div>
                  <input
                    type="password"
                    id="password-input"
                    name="password-input"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={this.handlePasswordChange}
                    style={{ width: "220px", height: "35px" }}
                  />
                </div>

                <div className="grid-item">
                  <form className="button" onSubmit={this.handleSubmit}>
                    <Link to="/allopenjobs">
                    <input
                      type="submit"
                      value={buttonText}
                      style={{
                        width: "100px",
                        height: "40px",
                        fontWeight: "bold",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "5px",
                        cursor: "pointer",
                        border: "1px solid black",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        transition: "background-color 0.3s, color 0.3s",
                      }}
                    />
                    </Link>
                  </form>
                </div>

                <div className="grid-item">
                  <p>
                    {isSignUp
                      ? "Already have an account?"
                      : "Don't have an account?"}
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={this.handleToggleMode}
                    >
                      {isSignUp ? "Log In" : "Sign Up"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="right-column">
              <img src="/practice.png" alt="Sample Image" />
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default HomePage;
