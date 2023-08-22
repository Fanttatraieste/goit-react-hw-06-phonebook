import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './contactSlice';

// function Contacts() {
//   const [search, setSearch] = useState('');

//   const contact = useSelector(state => state.contact);

//   function searchContact(target) {
//     const possibleList = contact.contactList.filter(contact => {
//       const normalizedTarget = target.toLowerCase().trim();
//       const normalizedContact = contact.name.toLowerCase().trim();
//       return normalizedContact.includes(normalizedTarget);
//     });
//     return (
//       <div>
//         {possibleList.map(contact => (
//           <Contact
//             name={contact.name}
//             number={contact.number}
//             key={contact.number}
//           />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Contacts</h2>
//       <label>
//         Search contacts by name
//         <input value={search} onChange={e => setSearch(e.target.value)}></input>
//       </label>
//       {!search &&
//         contact.contactList.map(contact => (
//           <Contact
//             name={contact.name}
//             number={contact.number}
//             key={contact.number}
//           />
//         ))}
//       {search && searchContact(search)}
//     </div>
//   );
// }

function Contacts() {
  const [name, setName] = useState('');

  const contact = useSelector(state => state.contact);
  const { contactList } = contact || [];

  return (
    <div>
      <h2>Contacts</h2>
      <div className="inputs">
        <div>
          <label>Search contacts by name</label>
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        {!name &&
          contactList.map(el => (
            <Contact name={el.name} number={el.number} key={el.number} />
          ))}
        {name &&
          contactList
            .filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            .map(el => (
              <Contact name={el.name} number={el.number} key={el.number} />
            ))}
      </div>
    </div>
  );
}

function Contact({ name, number }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteContact(number));
  }
  return (
    <div>
      <span>{name}</span>: <span>{number}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Contacts;
