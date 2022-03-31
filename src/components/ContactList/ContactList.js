import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem";


const ContactList = ({ contacts,onDeleteContact }) => (
    <ul>
        {contacts.map(contact => (
            <ContactItem contact={contact} onDeleteContact={onDeleteContact}/>    
        ))}
        </ul>
);
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactList;