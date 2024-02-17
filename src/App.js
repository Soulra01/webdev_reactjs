import React from 'react';
import Navbar from "./Components/navbar"; // Updated import statement
import Home from "./Components/home/home"; // Updated import statement
import "./Styles/App.css";

function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Home/>
		</React.Fragment>
	);
}

export default App;