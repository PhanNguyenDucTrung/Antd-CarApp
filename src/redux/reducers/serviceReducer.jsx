
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    serviceData: {},
    selectedRows: null, 
};

const serviceSlice = createSlice({
    name: 'serviceData',
    initialState,
    reducers: {
        setCarServiceData(state, action) {
            state.serviceData = action.payload;
        },
        setSelectedRows(state, action) {  // New reducer for selected row
            state.selectedRows= action.payload;
        },
    },
});

export const { setCarServiceData, setSelectedRows } = serviceSlice.actions;  // Export new action

export default serviceSlice.reducer;






