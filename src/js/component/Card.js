import proptypes from 'prop-types';
import React from 'react';
const Card=(props) =>{
    return (
        <div className="card m-5">
            <img className="card-img-top" src={props.cardImg} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
                <a href={props.cardBtnUrl} className="btn btn-primary">
                    {props.cardLabel}
                </a>
            </div>
        </div>
    );
}
Card.proptypes = {
	cardImg: proptypes.string,
	cardTitle: proptypes.string,
	cardDescription: proptypes.string,
	cardBtnUrl: proptypes.string,
	cardLabel: proptypes.string
}

export default Card;
