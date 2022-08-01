// Imports
import React, { useEffect } from "react";
import './css/displayMain.css';
import { useDispatch } from "react-redux";
import { setIsTouch } from "./store/features/gabrielleSlice";
import Card from "./components/Card";

// Product
const gabrielle = {
	category:'Perfume',
	name:'Gabrielle Essence',
	type:'Eau de parfum',
	description:`A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of Chanel.`,
	price:169.99,
	discountPrice:149.99
};

// Modernizr
const Modernizr = window.Modernizr;

// Component
const App = () => {

	// Dispatch
	const dispatch = useDispatch();

	// is touch ?
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
	},[dispatch]);

	// Return
	return(
		<main>
			<Card { ...gabrielle }/>
		</main>
	);

};

// Export
export default App;