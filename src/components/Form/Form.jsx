import React from 'react';
import css from './Form.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "features/operations/operations";
import { getItems } from 'features/selectors/selectors';
import { v4 } from 'uuid';





const Form = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getItems);

    const nameId = v4();
    const numberId = v4();


    const addContactHandler = (event) => {
        event.preventDefault();
    
        const formInput = event.target;
        const formName = formInput.elements.name.value;
        const formNumber = formInput.elements.number.value;

        const person = {
            name: formName,
            number: formNumber,
        }
    
        
        const validateForm = () => {
        
            if (!formName || !formNumber) {
                alert('This field empty!');
                return false;
            }
        
                return true;
            }
        if (!validateForm) return;

        const exist = contacts.find(contact => contact.name.toLowerCase().trim() === formName.toLowerCase().trim());

        if (exist) {
        alert(`${formName} is already in contacts list`);
        return;
    }
    
    
        const form = event.target;
        dispatch(addContacts(person))
        form.reset();
        
    }
    
    
    
    
        
        return (
            <form  className={css.Form} onSubmit={addContactHandler}>

                <label  className={css.Form__inputLabel}>
                    <p>Name:</p>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter name"
                    className={css.Form__input}
                    />
               </label>
                
                <label  className={css.Form__inputLabel}>
                    <p>Number:</p>
                <input
                    type="tel"
                    id={numberId}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter phone number"
                    className={css.Form__input}
                    />
                </label>
                
                <button
                    type="submit"
                    className={css.Form__button}> Add contact</button>
            </form>
        )
    }







export default Form;