import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { text });
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