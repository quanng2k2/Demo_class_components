import React, { Component } from "react";

export default class ThucHanh02 extends Component {
  constructor() {
    super();
    // khởi tạo state
    this.state = {
      selectedOption: "Other",
    };
  }
  // lắng nghe sự kiện thay đổi giá trị trên radio
  OnValueChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  // gửi dữ liệu khi click vào submit
  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.selectedOption);
  };

  render() {
    return (
      <div>
        <form>
          <div className="radio">
            <label>
              <input
                value="Male"
                checked={this.state.selectedOption === "Male"}
                onChange={this.OnValueChange}
                type="radio"
              />{" "}
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                value="Female"
                checked={this.state.selectedOption === "Female"}
                onChange={this.OnValueChange}
                type="radio"
              />{" "}
              Female
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                value="Other"
                checked={this.state.selectedOption === "Other"}
                onChange={this.OnValueChange}
                type="radio"
              />{" "}
              Other
            </label>
          </div>
          <div>Selected option is : {this.state.selectedOption}</div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
