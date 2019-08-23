import React, { Component } from "react";
import image from "../img/image.jpg";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.memes);
        this.setState({ allMemeImgs: data.data.memes });
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      console.log(this.state.allMemeImgs);
    }, 5000);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let rand = Math.floor(Math.random() * this.state.allMemeImgs.length);
    let meme = this.state.allMemeImgs[rand].url;
    this.setState({ randomImage: meme });
  }

  render() {
    return (
      <div className="frame">
        <form className="memeGenerator" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            onChange={this.handleChange}
            placeholder="Top Text"
          />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.handleChange}
            placeholder="Bottom Text"
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="Meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
