import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }
  userInput = event => {
    this.setState({ searchText: event.target.value });
  };
  userClick = () => {
    this.props.updateSearchText(this.state.searchText);
  };

  render() {
    return (
      <div className="Search ">
        <input
          type="text"
          placeholder="Type to search cakes "
          onChange={this.userInput}
        />
        <button onClick={this.userClick}> click to search </button>
      </div>
    );
  }
}

export default Search;
