import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://647dc69eaf984710854a4eb9.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            
            return response.data;
        } catch (error) {
            
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (person, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", person);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
  


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );