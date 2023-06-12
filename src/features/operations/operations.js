import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from '../contact/contactSlice'

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchContacts = () => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get("/contacts");
        dispatch(fetchingSuccess(response.data));
    } catch (error) {
        dispatch(fetchingError(error.message));
    }
};