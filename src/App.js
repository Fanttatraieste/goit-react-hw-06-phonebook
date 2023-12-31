import CreateCustomer from './features/customer/CreateCustomer';
import Customer from './features/customer/Customer';
import AccountOperations from './features/account/AccountOperations';
import BalanceDisplay from './features/account/BalanceDisplay';
import { useSelector } from 'react-redux';
import AddContact from 'features/contact/AddContact';
import Contacts from 'features/contact/Contacts';

function App() {
  const name = useSelector(state => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {/* <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay /> */}
      {!name && <CreateCustomer />}
      {name && (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
          <AddContact />
          <Contacts />
        </>
      )}
    </div>
  );
}

export default App;
