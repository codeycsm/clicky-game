import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark py-3 bg-dark">
          <div className="navbar-brand ml-md-5 font-weight-bold">
            Codey McDaniel
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse mr-5" id="navbar">
            <ul className="navbar-nav navbar-right ml-md-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://codeycsm.github.io/My-Portfolio/index.html"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://codeycsm.github.io/My-Portfolio/portfolio.html"
                >
                  My Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://codeycsm.github.io/My-Portfolio/contact.html"
                >
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://codeycsm.github.io/My-Portfolio/resume.pdf"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
