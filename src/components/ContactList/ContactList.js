import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';

import css from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <div key={id} className={css.container}>
            <li className={css.item}>
              <span className={css.span}>{name}: </span>
              {number}
            </li>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btn}
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
};
