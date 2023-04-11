import React,{Component} from "react";

export default class Controls extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: '',
        sortField: '',
        sortOrder: '',
      };
      console.log(this.state); 
    }
  
    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
      this.props.onSearch(event.target.value);
    };
  
    handleSort = (event) => {
      const { value } = event.target;
      const [sortField, sortOrder] = value.split('-');
      this.setState({ sortField, sortOrder });
      this.props.onSort(sortField, sortOrder);
    };
  
    render() {
      const { searchTerm, sortField, sortOrder } = this.state;
      return (
        <div>
          <label>
            Search:
            <input type="text" value={searchTerm} onChange={this.handleSearch} />
          </label>
          <label>
            Sort by:
            <select value={`${sortField}-${sortOrder}`} onChange={this.handleSort}>
              <option value="">None</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="age-asc">Age (Tăng Dần)</option>
              <option value="age-desc">Age (Giảm Dần)</option> 
            </select>
          </label>
        </div>
      );
    }
  }
