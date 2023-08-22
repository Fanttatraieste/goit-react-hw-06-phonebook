import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from './contactSlice';

function AddContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  function handleContact() {
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
