import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 120,
      flag: true,
    };
  }

  handleSecond = () => {
    this.setState({
      flag: true,
    });
    this.interval = setInterval(() => {
      if (this.state.flag) {
        this.setState((prev) => ({
          second: prev.second - 1,
        }));
      }
    }, 100);
  };

  handleStop =() => {
    clearInterval(this.interval)
    this.setState({
        flag : false ,
    })
  }

  render() {
    return (
      <div className="Timer">
        <p>{this.state.second}</p>
        <button onClick={this.handleSecond}>Chạy</button>
        <button onClick={this.handleStop}>Dừng</button>
      </div>
    );
  }
}

export default Timer;
