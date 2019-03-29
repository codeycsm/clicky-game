import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid my-0">
          <div className="container text-center">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead my-4">
              Click the images to earn points but dont click on the same image
              twice. <br />
              (If you guess all the images correclty they will be reset and you
              can keep guessing all 12 again)
            </p>
            <div className="row mt-5">
              <div className="col">
                <h3>Current Score: {this.props.score}</h3>
              </div>
              <div className="col">
                <h3>High Score: {this.props.highScore}</h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbotron;
