// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isTouch:false,
	urlSmallImage:'http://www.graphoeilmultimedia.com/reactDev/gabrielleChanel/imagesWWW/image-product-mobile.jpg',
	urlBigImage:'http://www.graphoeilmultimedia.com/reactDev/gabrielleChanel/imagesWWW/image-product-desktop.jpg'
};

// Slice
const gabrielleSlice = createSlice({
	name:'gabrielle',
	initialState,
	reducers:{
		// is touch ?
		setIsTouch:(state) => {
			state.isTouch = true;
		}
	}
});

// Actions export
export const { setIsTouch } = gabrielleSlice.actions;

// Reducer export
export default gabrielleSlice.reducer;