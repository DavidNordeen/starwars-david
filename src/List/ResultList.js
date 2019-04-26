import React, { Component } from 'react';


class ResultList extends Component {
  generateList(){
    let resultList = [];
    console.log(this.props);
    if (this.props.results.results) {
      resultList = this.props.results.results.map((results, key) => {
        console.log(results)
        return (
          <div key={key}>
            <h2>{results.name}</h2>
            {/* people */}
            {results.birth_year && <h3>Birth Year: {results.birth_year}</h3>}
            {results.height && <h3>Height: {results.height} centimeters</h3>}
           {results.mass &&  <h3>Weight: {results.mass !== 'unknown' ? `${results.mass} kilograms` : 'Unknown' }</h3>}
           {/* planet */}
            {results.climate && <h3>Climate: {results.climate}</h3>}
            {results.population && <h3>Population: {results.population} </h3>}
          </div>
        )
      })
    }
  
  console.log(resultList)
    return resultList;
  }
  
  render() {
    return (
      <section>
        {this.generateList()}
      </section>
    )
  }
}

export default ResultList;

