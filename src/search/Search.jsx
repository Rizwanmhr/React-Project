import React from "react";
import "./search.css";
import SearchBar from "./SearchBar";
import { Data } from "./Data";

const Search = () => {
  return (
    <div className="searchDatas">
      <SearchBar placeholder="Enter for Search..." data={Data} />
    </div>
  );
};

export default Search;
