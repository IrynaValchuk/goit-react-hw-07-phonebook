import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactForm, ContactList, Filter } from 'components';

import css from 'components/App/App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p className={css.info}>There are no contacts</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};
