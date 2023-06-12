import React from 'react';
import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem';
import { getContact } from 'features/selectors/selectors';
import { useSelector } from 'react-redux';
import getFilter from 'features/filter/getFilter';


const ContactList = () => {
    const items = useSelector(getContact);
    const filter = useSelector(getFilter);

  const getFiltered = () => {
    const normalizedFilter = filter.toLowerCase();
        if (!filter) {
            return items;
          }          
          const filteredContacts = items.filter(
            ({ name, number }) =>
              name.toLowerCase().trim().includes(normalizedFilter) ||
              number.trim().includes(normalizedFilter)
          );
        
          if (normalizedFilter && !filteredContacts.length) {
            alert(`No contacts matching your request`);
          }
          return filteredContacts;
    }
        
        
    
    const filtered = getFiltered();
    

    // if (items.length === 0) return null

    return (
        <ul>
            {filtered?.map(({ id, name, number, avatar }) => (
            <ContactListItem
              key={id}
                name={name}
                number={number}
                avatar={avatar}
          />))}
        </ul>
    )
}

export default ContactList;


ContactList.propTypes = {
    contacts: PropTypes.string,
    onDelete: PropTypes.func,
}