import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../App.css";

function Search({ submitSearch }) {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };
  return (
    <div className="search-form-container">
      <form action="" className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit" className="btn" onClick={onSubmit}>
          search
        </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Search;
