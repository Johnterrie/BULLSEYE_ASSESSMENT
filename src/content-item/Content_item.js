import React from "react";
import "../content-item/Content-item.css";
import json from "../data.json";

const ContentItem = (themeOne) => {
  
  const {theme} = themeOne.theme;
  console.log(theme);
  return (
    <main>
      <div className="container-main">
        {json.map((data) => {
        return (
          <div className={`content-div ${theme}`}>
          <img src={data.flag} alt="flag" className="flag-div" />
          <p className="name">{data.name}</p>
          <p className="para">Population: {data.population}</p>
          <p className="para">Region: {data.region}</p>
          <p className="para">Capital: {data.capital}</p>
        </div>
        )
        })}

      </div>
    </main>
  );
};

export default ContentItem;
