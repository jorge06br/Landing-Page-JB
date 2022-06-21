import React from "react";
import PropTypes from "prop-types";
import CardData from "./CardData";

const Card = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-3 col-sm-12">
          <CardData/>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "500px",
  height: "325px",
};

Card.PropTypes = {
  BtnURL: PropTypes.string,
  BtnLabel: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
  ImgUrl: PropTypes.string,
};

export default Card;
