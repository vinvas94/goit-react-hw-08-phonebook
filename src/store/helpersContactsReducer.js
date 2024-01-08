export const handlePending = state => {
  state.contacts.isLoading = true;
  state.error = null;
};

export const handleReject = (state, action) => {
  state.contacts.isLoading = false;
  state.error = action.payload;
};

export const handleFetchFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = action.payload;
  state.error = null;
};

export const handlePostFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(action.payload);
  state.error = null;
};

export const handleDeleteFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== action.payload.id
  );
  state.error = null;
};
