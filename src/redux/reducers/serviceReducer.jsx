
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    serviceData: {},
    selectedRows: null,
    userId: localStorage.getItem('id'),
    addNewVehicle: false
};

const serviceSlice = createSlice({
    name: 'serviceData',
    initialState,
    reducers: {
        setCarServiceData(state, action) {
            state.serviceData = action.payload;
        },
        setSelectedRows(state, action) {  // New reducer for selected row
            state.selectedRows = action.payload;
        },
        setUserId(state, action) {
            state.userId = action.payload
        },
        setAddNewVehicle(state, action) {
            state.addNewVehicle = action.payload;
        }
    },
});

export const { setCarServiceData, setSelectedRows, setUserId, setAddNewVehicle } = serviceSlice.actions;  // Export new action

export default serviceSlice.reducer;






