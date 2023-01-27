import { useState, useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import InputFilter from './InputFilter/InputFilter';
import ListContacts from './ListContacts/ListContacts';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLocaleLowerCase();
    console.log(name);

    const checkByName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );

    if (checkByName) {
      return alert(`localehost: 3000 says ${name} is already in contacts`);
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const filterContact = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getContactByName = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const deletContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contactId !== contact.id)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactsByName = getContactByName();
  return (
    <div
      style={{
        height: '100vh',
        width: '100vh',
        display: 'block',

        paddingLeft: 100,

        fontSize: 24,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <FormContacts onSubmit={addContact} />
      <h2>Contacts</h2>
      <InputFilter onChange={filterContact} value={filter} />

      <ListContacts contacts={contactsByName} onDeleteContact={deletContact} />
    </div>
  );
};
