import propTypes from 'prop-types';
import React from "react";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
			<div className="container-fluid ">
				<a className="navbar-brand d-none d-md-block" href="#">Mi Zoologico</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  > 
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)}
//Proptypes Text Content 
    export default Navbar