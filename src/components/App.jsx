import { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import Form from './Form/Form';
import Filter from './Filter/Filter';
import css from './App.module.css'
import ContactList from './ContactsList/ContactList';
import { fetchContacts } from 'features/contact/contactSlice';
import { getError, getIsLoading } from 'features/selectors/selectors';



const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);




    return (
    <div className={css.ContactsList}>
        <h1 className={css.ContactList__titleWhite}>Phonebook</h1>
        <div className={css.ContactList__style}>
          <Form />
          {isLoading && !error && <b>Request in progress...</b>}
        <h2 className={css.ContactList__titleBlue}>Contacts</h2>
          <Filter />
          <ContactList/>
        
        </div>
        
    </div>
  )
  }


export default App;







