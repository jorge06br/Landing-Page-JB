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
			<div className="container-fluid"> 
            <Jumbotron/>
            <div className="card-group mx-5">                
            <CardData/>
            </div>
			</div>
            <Footer/>
        </div>
    );
};

export default Home;
