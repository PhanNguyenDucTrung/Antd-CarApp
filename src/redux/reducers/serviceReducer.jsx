
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    serviceData: {},
    selectedRow: null,  // New field for selected row
};

const serviceSlice = createSlice({
    name: 'serviceData',
    initialState,
    reducers: {
        setCarServiceData(state, action) {
            state.serviceData = action.payload;
        },
        setSelectedRow(state, action) {  // New reducer for selected row
            state.selectedRow = action.payload;
        },
    },
});

export const { setCarServiceData, setSelectedRow } = serviceSlice.actions;  // Export new action

export default serviceSlice.reducer;






