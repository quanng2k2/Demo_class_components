import React, { Component } from "react";

export default class HtmlCssForm extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <form className="form">
            <h3>ĐĂNG KÝ</h3>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Code </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Code"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
