import { Component } from "react";

class FormDemo extends Component {
  constructor() {
    super();
    this.state = {
        value : "" ,
    };
  } ;
  // hàm lắng nghe sự thay đổi của giá trị trog ô input 
  handleChange = (event) => {
    this.setState({value : event.target.value})
  }
  // Hàm sử lý khi submit lên form
  handleSubmit = (event) => {
    // ngăn chặn hành vi load lại trang khi submit lên form
    event.preventDefault() ;
    alert("Giá trị nhập vào ô input là : " + this.state.value)

  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :
            <input type="text" onChange={this.handleChange} value={this.state.value} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default FormDemo;
