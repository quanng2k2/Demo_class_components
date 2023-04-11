import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    const displayValue = `You typed: ${this.state.inputValue}`;
    document.querySelector("p").textContent = displayValue;
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleInputChange} />
          <button type="button" onClick={this.handleButtonClick}>
            Youtube
          </button>
        </form>
        <p></p>
      </div>
    );
  }
}
export default App;
