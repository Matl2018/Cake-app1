import React, { Component } from "react";

class CakesList extends Component {
  constructor() {
    super();
    this.state = {
      cakes: []
    };
  }

  componentDidMount() {
    console.log(this);

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

  render() {
    return (
      <div>
        {this.state.cakes.map(cake => {
          return (
            <div>
              {/* <h1>{this.props.cake.title}</h1>
              <img src={this.props.cake.image} /> */}
              {/* <p>{this.props.cake.desc}</p> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CakesList;
