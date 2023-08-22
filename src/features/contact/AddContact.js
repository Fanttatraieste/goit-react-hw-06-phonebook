import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from './contactSlice';

function AddContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const { contactList } = useSelector(state => state.contact);

  function checkNumber(number) {
    if (!number.match(/^([0-9]{3}-[0-9]{3}-[0-9]{3})/)) return false;

    const numberList = contactList.map(contact => contact.number);
    for (let i = 0; i < numberList.length; i++)
      if (numberList[i] === number) return false;

    return true;
  }

  function handleContact() {
    if (!checkNumber(number)) {
      alert('The number should have the format 123-456-789 and be unique');
      return;
    }
    if (!name || !number) return;

    dispatch(create(name, number));

    setName('');
    setNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div className="inputs">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Number</label>
          <input
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>

        <button onClick={handleContact}>Add Contact</button>
      </div>
    </div>
  );
}

export default AddContact;
