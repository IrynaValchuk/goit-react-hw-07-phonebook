import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const form = evt.target;
    const contactName = form.elements.name.value;
    const contactNumber = form.elements.number.value;

    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    const isNumber = contacts.find(
      contact => contact.number.toLowerCase() === contactNumber.toLowerCase()
    );

    if (isContact) {
      alert(`${contactName} is already in contacts`);
      form.reset();
      return;
    } else if (isNumber) {
      alert(`Number ${contactNumber} is already in contacts`);
      form.reset();
      return;
    } else {
      dispatch(addContact(contactName, contactNumber));
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          placeholder="Enter number: xxx-xxx-xxxx"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
