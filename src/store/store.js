import { configureStore } from "@reduxjs/toolkit";
import  { contactsReducers } from "features/contact/contactSlice";
import filterSlice from "features/filter/filterSlice";



export const store = configureStore({
    reducer: {
    contacts: contactsReducers,
    filter: filterSlice,
    },
    
});


