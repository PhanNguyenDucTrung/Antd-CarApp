import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    stores: [
        {
            _id: '6623be8e8c5bdc3ffcd572c1',
            shop_images: [
                'https://storage.googleapis.com/rp-production-public-content/jcr587tax0uxwkqj136ehb43e4yd',
                'https://storage.googleapis.com/rp-production-public-content/TT1KNaGpBcTX7u8tPUCMququ ',
            ],
            shop_website: 'https://www.oceanworksberkeley.com/',
            shop_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            shop_short_description: 'Lorem ipsum dolor sit amet.',
            shop_name: 'Oceanworks',
            shop_address: '123 Main St, City, Country',
            shop_distance: 5,
            open_time: '2024-04-20T02:00:00.000Z',
            soonest_booking_time: '2024-04-20T01:00:00.000Z',
            soonest_booking_date: '2024-04-20T00:00:00.000Z',
            shop_phone: 1234567890,
            shop_free_dates: ['2024-04-22T00:00:00.000Z', '2024-04-25T00:00:00.000Z'],
            shop_reputation_star: 5,
            shop_reviewers: [1, 2, 34, 5],
            shop_appointments: [],
            shop_coordinate: [10.872109651019828, 106.62046779388074],
            __v: 0,
        },
        {
            _id: '6623be8e8c5bdc3ffcd572c2',
            shop_images: ['https://storage.googleapis.com/rp-production-public-content/x15uimo8l7ktwo27tldid76iprum'],
            shop_website: 'https://www.example.com/shop2',
            shop_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
            shop_short_description: 'Sed ut perspiciatis unde omnis iste.',
            shop_name: 'Shop 2',
            shop_address: '456 Elm St, City, Country',
            shop_distance: 7,
            open_time: '2024-05-20T02:00:00.000Z',
            soonest_booking_time: '2024-04-20T02:00:00.000Z',
            soonest_booking_date: '2024-04-20T00:00:00.000Z',
            shop_phone: 9876543210,
            shop_free_dates: [],
            shop_reputation_star: 0,
            shop_reviewers: [],
            shop_appointments: [],
            shop_coordinate: [10.861437842870101, 106.63181186716584],
            __v: 0,
        },
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
    setCurrentStore,
    setSelectedDate,
    setSelectedTime,
    setMake,

    setYear,
    setModel,
    setComment,
} = serviceSlice.actions; // Export new action

export default serviceSlice.reducer;
