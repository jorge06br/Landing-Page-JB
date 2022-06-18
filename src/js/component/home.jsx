import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import CardData from "./CardData";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>	
			<Jumbotron/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
