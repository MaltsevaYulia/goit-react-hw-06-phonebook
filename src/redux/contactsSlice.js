import { createSlice,nanoid } from '@reduxjs/toolkit';

const initialState =  [
    { name: 'mary Simpson', number: '423-45-89', id: 'SsVmrMfu5XMrNgxIPTdiq' },
    { name: 'Rosie Simpson', number: '423-45-89', id: 'j1_tgqVVUOF2UqkF83wCV' },
  ]

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name,number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
            
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    // toggleCompleted(state, action) {
    //   for (const task of state) {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed;
    //       break;
    //     }
    //   }
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
// console.log('🚀 ~ contactsSlise:', contactsSlice);
// console.log('🚀 ~ add:', addContact);
