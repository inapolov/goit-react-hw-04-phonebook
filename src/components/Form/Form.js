import {useState} from "react";
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function Form({onSubmit}){

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    

  const changeInputName = event => {
    setName(event.currentTarget.value);
  };
  
  const changeInputNumber = event => {
    setNumber(event.currentTarget.value);
      };

    const formSubmit = event => {
        event.preventDefault();        
        const data = { name, number };
        onSubmit(data);
        reset();
    };
    
    const reset = () => {
      setName('');
      setNumber('');
    };
    
   
        return (
            <form onSubmit={formSubmit} >
          <label className={styles.label}>
            Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={changeInputName}
                className={styles.input}
              />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
                onChange={changeInputNumber}
                className={styles.input}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        );
    
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Form;