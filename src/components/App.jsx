import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getContact} from '../features/contact/getContact'
import Form from './Form/Form';
import Filter from './Filter/Filter';
import css from './App.module.css'
import ContactList from './ContactsList/ContactList';
import { fetchContacts } from 'features/operations/operations';



const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(getContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);





    return (
    <div className={css.ContactsList}>
        <h1 className={css.ContactList__titleWhite}>Phonebook</h1>
        <div className={css.ContactList__style}>
        <Form  />
        {isLoading && <p>Loading tasks...</p>}
        <h2 className={css.ContactList__titleBlue}>Contacts</h2>
          <Filter />
          <ContactList/>
        
        </div>
        
    </div>
  )
  }


export default App;







