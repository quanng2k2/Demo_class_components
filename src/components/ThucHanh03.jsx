import { Component } from "react";

class ThucHanh03 extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  //lắng nghe sự kiện thay đổi giá trị trên radio
  onValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  // validate email
  validateEmail = (email) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  //gửi dữ liệu khi bấm nút submit
  formSubmit = (event) => {
    // loại bỏ hành vi mặc định của trình duyệt
    event.preventDefault();
    if (!this.state.value) {
      alert("Email không được dể trống");
    } else if (!this.validateEmail(this.state.value)) {
      alert("Email chưa đúng định dạng");
    } else {
      console.log(this.state.value);
    }
  };
  render() {
    return (
      <div>
        <from onSubmit={this.formSubmit}>
          <label>
            <input
              type="email"
              value={this.state.value}
              onChange={this.onValueChange}
            />{" "}
            email
          </label>
          <button type="submit">Submit</button>
        </from>
      </div>
    );
  }
}

export default ThucHanh03;
