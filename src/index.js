// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux
import store from "./store/store";
import { Provider } from "react-redux";

// ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={ store }>
		<App />
	</Provider>
);