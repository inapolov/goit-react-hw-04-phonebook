import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

function ContactItem({contact,onDeleteContact}) {
    return (
        <>
        <li key={contact.id} className={styles.item}>
                <p className={styles.contact}>{contact.name}: {contact.number}</p>
                <button onClick={()=>onDeleteContact(contact.id)} className={styles.button}>Delete</button>
                </li>
        </>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactItem;