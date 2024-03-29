import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [
        {
            id: 1,
            title: 'Inception',
            director: 'Christopher Nolan',
            rating: 8.8,
            genre: 'Action',
        },

        {
            id: 2,
            title: 'Interstellar',
            director: 'Christopher Nolan',
            rating: 8.6,
            genre: 'Sci-Fi',
        },
    ],
    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload);
        },
        removeMovie: (state, action) => {
            return state.filter(movie => movie.id !== action.payload.id);
        },
    },
});

export const { addMovie, removeMovie } = moviesSlice.actions;

export const selectMovies = state => state.movies;

export default moviesSlice.reducer;
