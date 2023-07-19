import React from "react";
import "./Card.css";

const Card = ({ heading, children }) => {
  return (
    <>
      <h1 className="card-heading">{heading}</h1>
      <div className="card-container">
        <div className="card-content">{children}</div>
      </div>
    </>
  );
};

export default Card;
