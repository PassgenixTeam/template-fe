import { createSlice } from "@reduxjs/toolkit";
import { setLoadingCase } from "./loading.reducers";
import { SERVICE_NAME } from "../constants";

const initialState: LoadingState = { isPageLoading: true };

// Create redux slice
export const loadingSlice = createSlice({
	name: SERVICE_NAME,
	initialState,
	reducers: {
		setPageLoading: setLoadingCase,
	},
});

// Export actions
export const { setPageLoading } = loadingSlice.actions;

// Export reducer
const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
