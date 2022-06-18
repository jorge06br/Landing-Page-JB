import proptypes from 'prop-types';
import React from 'react';

const Jumbotron = (props) => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">A Warm Welcome!!!</h1>
			<p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
			<a className="btn btn-primary btn-lg" href="" role="button">
				Call to action!
			</a>
		</div>
	);
};


export default Jumbotron