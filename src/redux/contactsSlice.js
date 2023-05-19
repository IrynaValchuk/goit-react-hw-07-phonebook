import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = { value: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});

export const getContacts = state => state.contacts.value;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

