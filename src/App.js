import React, { Component, Fragment } from "react";

import "./App.css";

class App extends Component {
  state = {
    background: [
      "blue",
      "red",
      "yellow",
      "pink",
      "brown",
      "skyblue",
      "royalblue",
      "white",
      "chocolate",
      "violet",
      "saddlebrown",
      "purple",
      "orangered",
      "tomato",
      "mediumvioletred",
      "teal"
    ],
    backG: "",
    timer: 0,
    isTiming: true
  };

  // handleChange = () => {
  //   let ran = Math.floor(Math.random() * this.state.background.length);
  //   let rand = this.state.background[ran];
  //   this.setState({ backG: rand });
  // };

  getChange = () => {
    setInterval(() => {
      if (this.state.timer === 1000) {
        this.state.timer = 0;
      }
      if (this.state.isTiming) {
        this.setState((prevstate) => {
          return {
            timer: prevstate.timer + 1
          };
        });
      }
    }, 100);
  };

  handleStart = () => {
    this.setState({ isTiming: true });
  };

  handleStop = () => {
    this.setState({ isTiming: false });
  };

  // componentWillMount() {
  //   alert("Page is coming");
  // }

  componentDidMount() {
    this.getChange();
  }

  render() {
    return (
      <Fragment>
        <h1 style={{ textAlign: "center" }}>Colorful Boxes</h1>
        <div className="boxes">
          <div
            style={{
              background: this.state.background[
                Math.floor(Math.random() * this.state.background.length)
              ],
              height: "50px",
              width: "50px",
              margin: "10px",
              border: "2px solid #000"
            }}
          />
          <div
            style={{
              background: this.state.background[
                Math.floor(Math.random() * this.state.background.length)
              ],
              height: "50px",
              width: "50px",
              margin: "10px",
              border: "2px solid #000"
            }}
          />
          <div
            style={{
              background: this.state.background[
                Math.floor(Math.random() * this.state.background.length)
              ],
              height: "50px",
              width: "50px",
              margin: "10px",
              border: "2px solid #000"
            }}
          />
          <div
            style={{
              background: this.state.background[
                Math.floor(Math.random() * this.state.background.length)
              ],
              height: "50px",
              width: "50px",
              margin: "10px",
              border: "2px solid #000"
            }}
          />
          <div
            style={{
              background: this.state.background[
                Math.floor(Math.random() * this.state.background.length)
              ],
              height: "50px",
              width: "50px",
              margin: "10px",
              border: "2px solid #000"
            }}
          />
          <div
            style={{
              background: this.state.background[
                Math.floor(Math.random() * this.state.background.length)
              ],
              height: "50px",
              width: "50px",
              margin: "10px",
              border: "2px solid #000"
            }}
          />
        </div>
        <div className="controls">
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handleStop}>Stop</button>
        </div>
        <div>
          <h3
            className="msgColor"
            style={{ color: !this.state.isTiming && "red" }}
          >
            {this.state.isTiming ? `Changing...` : `Stopped at`}
          </h3>
          <h1 style={{ textAlign: "center" }}>{this.state.timer}</h1>
        </div>
      </Fragment>
    );
  }
}

export default App;
