import React, { Component } from 'react';

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: null
    };
  }

  handleClick = () => {
    const randomSide = Math.random() < 0.5 ? 'heads' : 'tails';
    this.setState({ side: randomSide });
  };

  render() {
    const { side } = this.state;

    return (
      <div className="coin">
        <h1>Let's flip a coin!</h1>
        <button onClick={this.handleClick}>Flip</button>
        {side && (
          <div className="coin-container">
            <div className={`coin ${side}`}></div>
          </div>
        )}
      </div>
    );
  }
}
export default Coin;
