import React, { Component } from "react";
import Cake from "./Cake";
import Search from "./Search";

class CakesList extends Component {
  constructor() {
    super();
    this.state = {
      cakes: [],
      cakesDisplayed: []
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
    )
      .then(function(data) {
        return data.json();
      })
      .then(ServerCakes => {
        return this.setState({
          cakes: ServerCakes,
          cakesDisplayed: ServerCakes
        });
      });
  }

  filterCakes = event => {
    const value = event.target.value;
    const filteredCakes = this.state.cakes.filter(cake => {
      return cake.title.includes(value);
    });
    this.setState({
      cakesDisplayed: filteredCakes
    });
  };

  render() {
    return (
      <div className="cakes">
        <Search onInputChange={this.filterCakes} />
        {this.state.cakesDisplayed.map((cake, index) => {
          return (
            <div key={index}>
              <Cake {...cake} />
              {/* title={cake.title} image={cake.image} desc={cake.desc} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CakesList;
