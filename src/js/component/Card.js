import React from "react";

const Card = (alfa) => {
  return (
    <div className="card m-5">
      <img
        className="card-img-top cardStyle"
        src={alfa.ImgURL}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{alfa.Title}</h5>
        <p className="card-text">{alfa.Description}</p>
        <a href={alfa.BtnURL} className="btn btn-primary">
          {alfa.BtnLabel}
        </a>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "500px",
  height: "325px",
};

export default Card;
