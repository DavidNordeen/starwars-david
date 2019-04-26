import React, { Component } from 'react';


class ResultList extends Component {
  generateList() {
    let resultList = [];
    console.log(this.props);
    if (this.props.results.results) {
      resultList = this.props.results.results.map((results, key) => {
        console.log(results)
        return (
          <div key={key}>
            {results.name && <h2>{results.name}</h2>}
            {/* people */}
            {results.birth_year && <h3>Birth Year: {results.birth_year}</h3>}
            {results.height && <h3>Height: {results.height} centimeters</h3>}
            {results.mass && <h3>Weight: {results.mass !== 'unknown' ? `${results.mass} kilograms` : 'Unknown'}</h3>}
            {/* planet */}
            {results.climate && <h3>Climate: {results.climate}</h3>}
            {results.population && <h3>Population: {results.population} </h3>}
            {/* starships and vehicles */}
            {results.model && <h3>Model: {results.model}</h3>}
            {results.manufacturer && <h3>Manufacturer: {results.manufacturer} </h3>}
            {results.starship_class && <h3>Starship Class: {results.starship_class} </h3>}
            {results.vehicle_class && <h3>Vehicle Class: {results.vehicle_class} </h3>}
            {results.crew && <h3>Crew Count: {results.crew} </h3>}
            {/* films */}
            {results.title && <h2>{results.title}</h2>}
            {results.episode_id && <h3>Episode {results.episode_id} </h3>}
            {results.director && <h3>Director: {results.director} </h3>}
            {results.producer && <h3>Producer: {results.producer} </h3>}
            {results.opening_crawl && <p>{results.opening_crawl} </p>}
            {/* species */}
            {results.designation && <h3>Designation: {results.designation} </h3>}
            {results.classification && <h3>Classification: {results.classification} </h3>}
            {results.language && <h3>Language: {results.language} </h3>}
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

