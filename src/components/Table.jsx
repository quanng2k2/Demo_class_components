import React, { Component } from "react";

export default class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

