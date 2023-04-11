import React, { Component } from "react";

export default class EventClass extends Component {
  constructor() {
    super();
    this.state = {
      addOn: false,
    };
  }

  handelClickOn = () => {
    this.setState({ addOn: !this.state.addOn }); 
  };

  render() {
    return (
      <>
        {this.state.addOn ? (
          <div>
            <button onClick={this.handelClickOn}>Off</button>
            {/* <p>Tôi đang học ở RikkeiAcademy !!!</p>  */}
            <img src="/image/coin1.jpg" alt="Đang load..." />
          </div>
        ) : (
          <div>
            <button onClick={this.handelClickOn}>On</button>
            <img src="/image/coin2.jpg" alt="Đang load..." />
          </div>
        )}
      </>
    );
  }
}
