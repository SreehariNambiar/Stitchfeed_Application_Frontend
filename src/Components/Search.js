import React from "react";
import { ReactComponent as SearchBottom } from "../Assets/Search-bottom.svg";
import { ReactComponent as Circle } from "../../assets/Circle.svg";
const Search = () => {
  return (
    <section className="search-details">
      <div className="search-header">
        <div className="circle">
          <Circle className="search-circle" />
        </div>
        <div className="search-list">
          <div className="search-h">
            <ul>
              <li>@sam</li>
              <li>sam</li>
            </ul>
          </div>

          <div className="search-l">
            <ul>
              <li>2.5k upvotes</li>
              <li>2k stitches</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="search-bottom">
        <div className="search-contents">
          <ul className="search-ele">
            <li className="para">
              <p>Can't find your interests...</p>
              <p>Create one now and meet...</p>
              <p>People with your interests...</p>
            </li>
            <li>
              <SearchBottom className="svgxxx" />
            </li>
          </ul>
          <button type="button" className="search-interests">
            Create my interest
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
