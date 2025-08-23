import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitle">
          <h2>FilmFreak</h2>
        </div>
        <div className="searchBar">
          <label>
            <p>Search for films</p>
            <input className="search" type="text" placeholder="Search..." />
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
