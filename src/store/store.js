import { configureStore } from "@reduxjs/toolkit";
import  { contactReducers } from "features/contact/contactSlice";
import filterSlice from "features/filter/filterSlice";



export const store = configureStore({
    reducer: {
    contacts: contactReducers,
    filter: filterSlice,
    },
    
});


