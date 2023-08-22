import accountReducer from './features/account/accountSlice';
import customerReducer from './features/customer/customerSlice';
import contactReducer from './features/contact/contactSlice';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
    contact: contactReducer,
  },
});

export default store;
