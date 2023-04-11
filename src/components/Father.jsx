import React, { Component } from 'react';
import Table from './Table';
import Controls from './Control';

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'Quân', age: 21, gender: 'Male' },
        { id: 2, name: 'Hải', age: 19, gender: 'Male' },
        { id: 3, name: 'Tú', age: 24, gender: 'Male' },
        { id: 4, name: 'Cường', age: 22, gender: 'Male' },
        { id: 5, name: 'Đức', age: 26, gender: 'Male' },
      ],
      searchTerm: '',
      sortField: '',
      sortOrder: '',
    };
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm });
  };

  handleSort = (sortField, sortOrder) => {
    this.setState({ sortField, sortOrder });
  };

  render() {
    const { data, searchTerm, sortField, sortOrder } = this.state;

    // Fatherly search filter
    let filteredData = data.filter((row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Fatherly sort order
    if (sortField && sortOrder) {
      const orderFactor = sortOrder === 'asc' ? 1 : -1;
      filteredData = filteredData.sort((rowA, rowB) =>
        rowA[sortField] > rowB[sortField] ? orderFactor : -orderFactor
      );
    }

    return (
      <div>
        <Controls onSearch={this.handleSearch} onSort={this.handleSort} />
        <Table data={filteredData} />
      </div>
    );
  }
}

export default Father;
