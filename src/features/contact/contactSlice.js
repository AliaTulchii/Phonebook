import { createSlice } from "@reduxjs/toolkit"



export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchingInProgress(state) {
            state.isLoading = true;
        },
        fetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        fetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})


export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions
export default contactSlice.reducer