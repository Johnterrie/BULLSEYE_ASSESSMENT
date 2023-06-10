import React from "react";
import "./Content.css";
import ContentItem from "../content-item/Content_item";

const Content = (theme) => {
  return (
    <div className={`container ${theme.theme} `}>
      <div className="input-div">
        <input className="input-cont" placeholder="Search for a country......"></input>

        <select name="cars" id="cars" className="filter-content">
          <option value="" disabled selected hidden><li>Filter by Region</li></option>
          <option  value="Africa"><li className="filtervalue">Africa</li></option>
          <option className="filtervalue" value="America">America</option>
          <option className="filtervalue" value="Asia">Asia</option>
          <option className="filtervalue" value="Europe">Europe</option>
          <option className="filtervalue" value="Oceania">Oceania</option>
        </select>
      </div>


      <main>
        <ContentItem theme={theme}/>
      </main>
    </div>
  );
};

export default Content;
