import React from "react";

const Search = props => {
  return (
    <div className="Search ">
      <input
        type="text"
        placeholder="Type to search cakes "
        onChange={props.onInputChange}
      />
    </div>
  );
};

export default Search;
