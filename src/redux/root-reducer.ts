import fontReducer from "../services/font/redux/font.slice";
import languageReducer from "../services/language/redux/language.slice";
import loadingReducer from "../services/loading/redux/loading.slice";

// Combine all reducers
const rootReducer = {
	font: fontReducer,
	language: languageReducer,
	loading: loadingReducer,
};

export default rootReducer;
