import { combineReducers } from '@reduxjs/toolkit';

import movieReducer from './reducers/moviesReducer';

const rootReducer = combineReducers({
    // user: userReducer,
    movies: movieReducer,
});

export default rootReducer;
