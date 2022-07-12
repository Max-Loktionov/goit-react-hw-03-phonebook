import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Tom Sanches', number: '+38035252' },
    ],
    filterText: '',
  };
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name: name,
        number: number,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };
  changeFilter = e => {
    this.setState({ filterText: e.currentTarget.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFiltredContacts = () => {
    const { contacts, filterText } = this.state;
    const filtredContacts = filterText.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtredContacts)
    );
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);

    this.setState({ contacts: parcedContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const filtredContacts = this.getFiltredContacts();
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook onFormSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filterText} onChange={this.changeFilter} />
          <Contacts
            data={filtredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
