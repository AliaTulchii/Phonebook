import { createSlice } from "@reduxjs/toolkit"
import { addContacts, deleteContact, fetchContacts } from "features/operations/operations";




export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
            console.log(action.payload);
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },


        [addContacts.pending](state) {
            state.isLoading = true;
          },
          [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
          },
          [addContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
        

          [deleteContact.pending](state) {
            state.isLoading = true;
          },
          [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
              task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
    },
})


export const contactsReducers = contactSlice.reducer