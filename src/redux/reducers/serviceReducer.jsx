import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    stores: [

    ],
    selectedDate: new Date().toISOString(),
    selectedTime: '10:00',
    selectedStore: null,
    serviceData: {},
    selectedRowKeys: [],
    selectedRows: null,
    userId: localStorage.getItem('id'),
    addNewVehicle: false,
    editingObj: null,
    vehiclesData: [],
    make: '',
    year: '',
    model: '',
    comment: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
        setSelectedRows(state, action) {
            // New reducer for selected row
            state.selectedRows = action.payload;
        },
        setSelectedRowKeys(state, action) {
            state.selectedRowKeys = action.payload;
        },
        setUserId(state, action) {
            state.userId = action.payload;
        },
        setAddNewVehicle(state, action) {
            state.addNewVehicle = action.payload;
        },
        setStores(state, action) {
            state.stores = action.payload;
        },
        setCurrentStore(state, action) {
            if (state.stores.length > 0) {
                state.selectedStore = state.stores.find(store => store._id === action.payload);
            }
        },
        setSelectedDate(state, action) {
            state.selectedDate = action.payload;
        },
        setSelectedTime(state, action) {
            state.selectedTime = action.payload;
        },
        setMake(state, action) {
            state.make = action.payload;
        },
        setYear(state, action) {
            state.year = action.payload;
        },
        setModel(state, action) {
            state.model = action.payload;
        },
        setComment(state, action) {
            state.comment = action.payload;
        },
        setFirstName(state, action) {
            state.firstName = action.payload;
        },
        setLastName(state, action) {
            state.lastName = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPhone(state, action) {
            state.phone = action.payload;
        },
    },
});

export const {
    setCarServiceData,
    setSelectedRows,
    setUserId,
    setAddNewVehicle,
    setEditing,
    setVehicles,
    setSelectedRowKeys,
    setStores,
    setCurrentStore,
    setSelectedDate,
    setSelectedTime,
    setMake,
    setYear,
    setModel,
    setComment,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
} = serviceSlice.actions; // Export new action

export default serviceSlice.reducer;
