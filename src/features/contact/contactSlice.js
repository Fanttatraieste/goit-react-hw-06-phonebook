import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
  contactList: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    create: {
      prepare(name, number) {
        return { payload: { name, number } };
      },

      reducer(state, action) {
        state.name = action.payload.name;
        state.number = action.payload.number;
        state.contactList.push({ name: state.name, number: state.number });
        // const contact = Object.create(state.name, state.number);

        // state.contactList = [...state.contactList, { action.payload.name, action.payload.number }];
      },
    },
    deleteContact(state, action) {
      const newList = state.contactList.filter(
        contact => contact.number !== action.payload
      );
      state.contactList = newList;
    },
  },
});

export const { create, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
