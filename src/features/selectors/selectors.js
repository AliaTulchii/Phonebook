export const getContact = state => state.contact.contacts;
export const getItems = state => state.contact.contacts.items;
export const getIsLoading = state => state.contact.contacts.isLoading;
export const getError = state => state.contact.contacts.error;
export const getStatusFilter = state => state.filters.status;