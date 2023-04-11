import React from "react";

class ReactFormLoginSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maNhanVien: "",
      email: "",
      matKhau: "",
    };
  }

  handleMaNhanVienChange = (event) => {
    this.setState({ maNhanVien: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleMatKhauChange = (event) => {
    this.setState({ matKhau: event.target.value });
  };

  handleFormSubmit = (event) => {
    //ngăn chặn hành vi load lại trang khi submit lên trang
    event.preventDefault();
    const { maNhanVien, email, matKhau } = this.state;

    if (maNhanVien === "") {
      alert("Mã không được để trống");
    } else if (!maNhanVien.startsWith("NV")) {
      alert("Mã không đúng định dạng");
    } else if (maNhanVien.length < 8) {
      alert("Mã không được nhỏ hơn 8 ký tự");
    } else if (maNhanVien.length > 18) {
      alert("Mã không được lớn hơn 18 ký tự");
    } else if (email === "") {
      alert("Email không được để trống");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Email không đúng định dạng");
    } else if (matKhau.length < 8) {
      alert("Mật khẩu không được nhỏ hơn 8 ký tự");
    } else {
      let saveData = {
        maNhanVien : this.state.maNhanVien ,
        email : this.state.email ,
        matKhau : this.state.matKhau ,
      }
      this.listData.push(saveData)
      console.log(this.listData);
      alert("Đăng ký thành công");
    }
  };
  listData = [] ;
  render() {
    const { maNhanVien, email, matKhau } = this.state;
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleFormSubmit}>
          <h3>ĐĂNG KÝ</h3>
          <div>
            <label htmlFor="maNhanVien">Mã nhân viên:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Code"
              name="maNhanVien"
              value={maNhanVien}
              onChange={this.handleMaNhanVienChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="matKhau">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="matKhau"
              value={matKhau}
              onChange={this.handleMatKhauChange}
            />
          </div>
          <button className="buttonSignUp" type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}

export default ReactFormLoginSignUp;