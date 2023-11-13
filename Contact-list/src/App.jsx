import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setCurrentContact({});
  };
  
  const editContact = (contact) => {
    setCurrentContact(contact);
  };

  

  return (
      <>
        <div className="App">
          <div className="ContactForm">
            <ContactForm addContact={addContact} updateContact={updateContact} currentContact={currentContact} />
          </div>
          <div className="ContactList">
            <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
          </div>
        </div>
      </>

    // <div className="App">
    //   <h1>Contact Book</h1>
    //   <ContactForm addContact={addContact} updateContact={updateContact} currentContact={currentContact} />
    //   <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
    // </div>
  );
}

export default App;
