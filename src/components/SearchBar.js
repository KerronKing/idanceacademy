import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
  }
  
  return (
    <form id="searchForm" onSubmit={this.handleSubmit}>
      <input
        name="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        placeholder="Search"
      />
      <input type="Submit" value="submit" />
    </form>
  );
};

export default SearchBar;
