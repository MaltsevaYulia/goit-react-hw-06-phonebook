import React, {  useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';

// const LS_CONTACTS = 'contacts';

export const App = () => {
  // const contactsLS = JSON.parse(localStorage.getItem(LS_CONTACTS));
  // const [contacts, setContacts] = useState(()=>[...contactsLS]);
  const [filter, setFilter] = useState('');

  

  // useEffect(() => {
  //   localStorage.setItem(LS_CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   setContacts(prev => {
  //     return [...prev, { name, number, id: nanoid() }];
  //   });
  // };

  // const deleteContact = contactId => {
  //   setContacts(prev => {
  //     return prev.filter(contact => contact.id !== contactId);
  //   });
  // };

  const changeFilter = e => {
    const value = e.target.value;
    setFilter(value);
  };

  // const normalizedFilter = filter.toLocaleLowerCase();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList  />
    </div>
  );
};


