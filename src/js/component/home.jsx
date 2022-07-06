import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./footer.jsx"
import NavBar from "./navbar.jsx"
import CardComponent from "./cardcomponent.jsx"
/* Holaaaaa */
const Home = () => {
	return ( <> <NavBar/>
	<Jumbotron/>
	<div className="card-group mx-auto">
	<CardComponent cardTitle={"Card Title"} cardText={"This is an example of test Ill use for the first card."} cardButton={"Find Out More!"}/>
	<CardComponent cardTitle={"Card Title"} cardText={"In the next card I'll use some other words like Lorem Ipsum, again and again and again."} cardButton={"Find Out More!"}/>
	<CardComponent cardTitle={"Card Title"} cardText={"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"} cardButton={"Find Out More!"}/>
	<CardComponent cardTitle={"Card Title"} cardText={"This is the last card where I'll add any kind of sentences. I hope I can do the next part correctly."} cardButton={"Find Out More!"}/>
	</div>
		<Footer/>
		</>
	);
};


export default Home;


