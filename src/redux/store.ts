import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

// let composeEnhancers = compose;

// // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
// if (process.env.NODE_ENV !== "production") {
// 	if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
// }

// Create store
const store = configureStore({
	reducer: rootReducer,
	// enhancers: [composeEnhancers(applyMiddleware())],
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
