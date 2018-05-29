import React, { Component } from "react";
import Cake from "./Cake";
import Search from "./Search";

class CakesList extends Component {
  constructor() {
    super();
    this.state = {
      cakes: []
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
        return this.setState({ cakes: ServerCakes });
      });
  }
  filterCakes = input => {
    const filteredCakes = this.state.cakes.filter(cake => {
      return cake.includes(input);
    });
    this.setState({
      cakes: filteredCakes
    });
  };
  onChange = event => {
    const inputValue = event.target.value;
    return this.filterCakes(inputValue);
  };

  render() {
    return (
      <div>
        <Search onChange={this.onChange} />
        {this.state.cakes.map((cake, index) => {
          return (
            <div>
              <Cake key={index} {...cake} />
              {/* title={cake.title} image={cake.image} desc={cake.desc} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CakesList;
