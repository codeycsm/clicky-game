import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import ClickGame from "./components/ClickGame";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: [
      {
        id: 1,
        clicked: false,
        url: "https://i.ebayimg.com/images/g/pjEAAOSwAXhZ0xvc/s-l300.jpg"
      },
      {
        id: 2,
        clicked: false,
        url:
          "https://target.scene7.com/is/image/Target/GUEST_6dd17843-f2a4-4dde-ac54-006d8acdd27d?wid=488&hei=488&fmt=pjpeg"
      },
      {
        id: 3,
        clicked: false,
        url:
          "https://images-na.ssl-images-amazon.com/images/I/41Zn6e6%2BM6L.jpg"
      },
      {
        id: 4,
        clicked: false,
        url:
          "https://target.scene7.com/is/image/Target/GUEST_0d9eed8b-305c-4c9f-b1d9-4ab86886bba1?wid=488&hei=488&fmt=pjpeg"
      },
      {
        id: 5,
        clicked: false,
        url:
          "https://target.scene7.com/is/image/Target/GUEST_e3334e67-aa88-4bd1-aca4-d7be9ce0dc0e?wid=488&hei=488&fmt=pjpeg"
      },
      {
        id: 6,
        clicked: false,
        url:
          "https://images-na.ssl-images-amazon.com/images/I/61HlZgw5wvL._SX425_.jpg"
      },
      {
        id: 7,
        clicked: false,
        url:
          "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2541000/ff_2541286_full.jpg&w=900"
      },
      {
        id: 8,
        clicked: false,
        url:
          "https://cdn.shoplightspeed.com/shops/611372/files/4034096/green-bay-packers-logo-on-the-gogo.jpg"
      },
      {
        id: 9,
        clicked: false,
        url:
          "https://images-na.ssl-images-amazon.com/images/I/51UhnWw3kyL._SX425_.jpg"
      },
      {
        id: 10,
        clicked: false,
        url:
          "https://images-na.ssl-images-amazon.com/images/I/719P55is%2BwL._SX466_.jpg"
      },
      {
        id: 11,
        clicked: false,
        url:
          "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3037000/ff_3037887_full.jpg&w=900"
      },
      {
        id: 12,
        clicked: false,
        url:
          "https://target.scene7.com/is/image/Target/GUEST_90cce403-3beb-4457-9eb9-557ebf7d2f8b?wid=488&hei=488&fmt=pjpeg"
      }
    ]
  };

  handleImageClick = id => {
    const updateImages = this.state.images;
    if (this.state.score === 12) {
      this.setState({ highScore: this.state.score });
      updateImages.map(image => {
        image.clicked = false;
      });
    }
    updateImages.map(image => {
      if (image.id === id && image.clicked === false) {
        image.clicked = true;
        this.setState({ score: this.state.score + 1 });
      } else if (image.id === id && image.clicked === true) {
        if (this.state.score > this.state.highScore) {
          this.setState({ highScore: this.state.score });
        }
        updateImages.map(image => {
          image.clicked = false;
        });
        this.setState({ score: 0 });
      }
    });
    updateImages.sort(() => Math.random() - 0.5);
    this.setState({
      images: updateImages
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <ClickGame
          handleImageClick={this.handleImageClick}
          images={this.state.images}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
