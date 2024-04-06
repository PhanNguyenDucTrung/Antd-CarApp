import { combineReducers } from '@reduxjs/toolkit';

import movieReducer from './reducers/moviesReducer';
import serviceReducer from './reducers/serviceReducer';

const rootReducer = combineReducers({
    // user: userReducer,
    serviceReducer: serviceReducer,
    movies: movieReducer,

});

export default rootReducer;
