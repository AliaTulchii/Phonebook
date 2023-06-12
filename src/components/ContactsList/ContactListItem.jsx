import React from 'react';
import css from './ContactsList.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import person from './person.png'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'features/operations/operations';

const ContactListItem = ({id, name, number, avatar }) => {
    const dispatch = useDispatch();

    const deleteContactHandler = () => {
        dispatch(deleteContact(id));
    }

    return (
        <li 
            className={css.ContactsList__item}>     
            <img src={avatar || person} alt={name} className={ css.ContactList__img } />
            <p className={css.ContactsList__text}>{name}</p>
                <p className={css.ContactsList__textWhite}>{number}</p>
                <button
                    className={css.ContactsList__button}
                    onClick={()=>deleteContactHandler(id)}
                ><FaTrashAlt /></button>
            </li>)
   
}

export default ContactListItem

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
}