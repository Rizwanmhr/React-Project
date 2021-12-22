import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const handleFilter = (e) => {
    const searchValue = e.target.value;
    setSearchWord(searchValue);
    const NewSearch = data.filter((value) => {
      return value.license.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilteredData([]);
    } else {
      setFilteredData(NewSearch);
    }
  };
  const closeSearch = () => {
    setFilteredData([]);
    setSearchWord("");
  };
  return (
    <div className="searchDatas">
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
            value={searchWord}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon onClick={closeSearch} />
            )}
          </div>
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.map((value, key) => {
                return (
                  <>
                    <div>{value.license}</div>
                    <div>{value.address}</div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
