import React from "react";

const Search = props => {
  return (
    <div className="Search ">
      <input
        type="text"
        placeholder="Type to search cakes "
        onChange={this.onChange}
      />
      <button> click to search </button>
    </div>
  );
};

export default Search;
