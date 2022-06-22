import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import CardData from "./CardData";


// create your first component
const Home = () => {
    return (
        <div className="">
            <Navbar/>
			<div className="container"> 
            <Jumbotron/>
            <div className="container card-group  p-0">                
            <CardData/>
            </div>
			</div>
            <Footer/>
        </div>
    );
};

export default Home;
