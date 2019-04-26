import React, { Component } from 'react';
import './App.css';
import SearchBar from './FilterSearch/SearchBar';
import Filter from './FilterSearch/Filter';
import ResultList from './List/ResultList';

class App extends Component {
  state = {
    results: [],
    searchTerm: 'Skywalker',
    filter: 'people'
  }

  updateSearchTerm(term, filter) {
    this.setState({
      searchTerm: term,
      filter: filter
    },
    this.handleSearch()
    )
    console.log(this.searchTerm)
  }

  componentDidMount() {
    //This is how the page will load initially
    this.handleSearch(this.state.searchTerm);
  }

  handleSearch = (searchTerm,  filter = this.state.filter) => {
    this.setState({
      searchTerm: searchTerm,
      filter: filter
    })
    const url = `https://swapi.co/api/${filter}/?search=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }


  render() {
    return (
      <div className="App">
        <header>
          StarWars Search
      </header>
        <Filter handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} printType={this.state.printType} />
        <SearchBar handleSearch={this.handleSearch} />
        <ResultList results={this.state.results} />
      </div>
    );
  }

}

export default App;

