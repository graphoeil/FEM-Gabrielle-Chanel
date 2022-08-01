// Imports
import { configureStore } from "@reduxjs/toolkit";
import gabrielleReducer from "./features/gabrielleSlice";

// Combine reducers
const store = configureStore({
	reducer:{
		gabrielle:gabrielleReducer
	}
});

// Export
export default store;