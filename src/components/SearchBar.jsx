import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  handleChange = (e) => {
    let query = e.target.value;
    this.props.search(query)
  }

  render() {
    return(
        <input name="search"
                     type="text"
                     className='form-search form-control'
                     onChange={this.handleChange}
                     placeholder="Search Giphys">
        </input>
      )
  }
}

export default SearchBar;
