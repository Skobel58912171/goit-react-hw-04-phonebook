import { Component } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import InputFilter from './InputFilter/InputFilter';
import ListContacts from './ListContacts/ListContacts';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLocaleLowerCase();
    // console.log(name);

    const checkByName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );

    if (checkByName) {
      return alert(`localehost: 3000 says ${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  filterContact = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContactByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deletContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };
  componentDidMount() {
    console.log('add component');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    console.log('update component');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const contactsByName = this.getContactByName();
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
        {/* <FormContacts onSubmit={this.addContact} /> */}
        <FormContacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <InputFilter onChange={this.filterContact} value={filter} />

        <ListContacts
          contacts={contactsByName}
          onDeleteContact={this.deletContact}
        />
      </div>
    );
  }
}
