import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {
    replaceContacts: (state, action) => {
      state.contacts = action.payload;
    },

    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice;
