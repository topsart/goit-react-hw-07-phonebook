import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // addContactRequest,
  addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  deleteContactSuccess,
  // deleteContactError,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  // НЕ ПОЛУЧАЕТСЯ ДОБАВИТЬ ПРОВЕРКУ НА УЖЕ ИМЕЮЩЕЕСЯ ИМЯ!!!!
  // [actions.addContact]: (state, {payload}) => state.find((contact) => contact.name === payload.name ? alert(`${payload.name} already exist`) : [...state, payload]),
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
