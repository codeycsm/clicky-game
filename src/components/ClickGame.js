import React, { Component } from "react";

class ClickGame extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="clickGameContainer" className="container-fluid">
          <div id="clickGame" className="row p-3">
            {this.props.images.map(image => (
              <div key={image.id} className="col-sm-3 text-center my-2">
                <img
                  className="img-thumbnail border img"
                  src={image.url}
                  alt="NFL team logo"
                  onClick={() => this.props.handleImageClick(image.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClickGame;
