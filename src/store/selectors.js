import { createSelector } from '@reduxjs/toolkit';

export const selectGetContacts = state => state.contacts.contacts.items;
export const selectGetFilter = state => state.contacts.filter;
export const selectGetIsLoading = state => state.contacts.contacts.isLoading;
export const selectGetError = state => state.contacts.contacts.error;

export const selectContacts = createSelector(
  [selectGetContacts, selectGetFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
