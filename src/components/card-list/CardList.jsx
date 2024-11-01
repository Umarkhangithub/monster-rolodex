import React from "react";

import "./CardList.css";
import Card from "../card/Card";

const CardList = (props) => {
  console.log(props);

  return (
    <div className="card-list">
      {props.monster.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
