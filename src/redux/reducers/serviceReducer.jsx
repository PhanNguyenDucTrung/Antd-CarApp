
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    serviceData: {},
    selectedRowKeys: [],
    selectedRows: null,
    userId: localStorage.getItem('id'),
    addNewVehicle: false,
    editingObj: null,
    vehiclesData: [],
};

const serviceSlice = createSlice({
    name: 'serviceData',
    initialState,
    reducers: {
        setVehicles(state, action) {
            state.vehiclesData = action.payload;
        },
        setEditing(state, action) {
            state.editingObj = action.payload;
        },
        setCarServiceData(state, action) {
            state.serviceData = action.payload;
        },
        setSelectedRows(state, action) {  // New reducer for selected row
            state.selectedRows = action.payload;
        },
        setSelectedRowKeys(state, action) {
            state.selectedRowKeys = action.payload;
        },
        setUserId(state, action) {
            state.userId = action.payload
        },
        setAddNewVehicle(state, action) {
            state.addNewVehicle = action.payload;
        }
    },
});

export const { setCarServiceData, setSelectedRows, setUserId, setAddNewVehicle, setEditing, setVehicles, setSelectedRowKeys } = serviceSlice.actions;  // Export new action

export default serviceSlice.reducer;






