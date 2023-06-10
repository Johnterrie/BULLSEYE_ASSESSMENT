import React from "react";
import "./Content.css";
import ContentItem from "../content-item/Content_item";

const Content = () => {
  return (
    <div className="container">
      <div className="input-div">
        <input className="input-cont" placeholder="Search for a country......"></input>

        <select name="cars" id="cars" className="filter-content">
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value="volvo">Africa</option>
          <option value="saab">America</option>
          <option value="mercedes">Asia</option>
          <option value="audi">Europe</option>
          <option value="audi">Oceania</option>
        </select>
      </div>


      <main>
        <ContentItem/>
      </main>
    </div>
  );
};

export default Content;
