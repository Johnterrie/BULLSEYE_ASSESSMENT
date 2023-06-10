import React from "react";
import "../content/Content.css";
import json from "../data.json";

const ContentItem = () => {

  return (
    <main>
      <div className="container-main">
        {json.map((data) => {
        return (
          <div className="content-div">
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
