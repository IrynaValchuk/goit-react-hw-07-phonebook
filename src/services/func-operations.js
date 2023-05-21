const {
  fetchContacts,
  addContact,
  deleteContact,
} = require('redux/operations');

const arrOperations = [fetchContacts, addContact, deleteContact];

export const operationSelectionFn = type => arrOperations.map(el => el[type]);

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
};

export const handleFulfilledAdd = (state, action) => {
  state.items.push(action.payload);
};

export const handleFulfilledDelete = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
