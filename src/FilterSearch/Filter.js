import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-type">Search By: </label>
        <select
         id="search-type" 
         className="search-type" 
          onChange={e => this.props.handleSearch(this.props.searchTerm, e.target.value)}>
          <option value="people">Characters</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="films">Films</option>
          <option value="species">Species</option>
        </select>
      </div>
    )
  }
}
export default Filter;