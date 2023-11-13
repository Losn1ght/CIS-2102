import React, { useState, useEffect } from 'react';
import './styleform.css'

function ContactForm({ addContact, updateContact, currentContact }) {
  const [contact, setContact] = useState({
    name: '',
    age: '',
    contactNumber: '',
    course: '',
  });

  // Add a useEffect hook to handle form submission
  useEffect(() => {
    if (currentContact.id) {
      // If currentContact has an ID, populate the form for editing
      setContact(currentContact);
    } else {
      // Otherwise, clear the form
      setContact({
        name: '',
        age: '',
        contactNumber: '',
        course: '',
      });
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.age && contact.contactNumber && contact.course) {
      if (currentContact.id) {
        // If currentContact has an ID, update the contact
        updateContact(contact);
      } else {
        // Otherwise, add a new contact
        addContact({ ...contact, id: Date.now() });
      }
      // Clear the form
      setContact({
        name: '',
        age: '',
        contactNumber: '',
        course: '',
      });
    }
  };

  return (
    <>
        <h1>Contact Book</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          placeholder="Age"
          value={contact.age}
          onChange={(e) => setContact({ ...contact, age: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          placeholder="Contact Number"
          value={contact.contactNumber}
          onChange={(e) =>
            setContact({ ...contact, contactNumber: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          placeholder="Course"
          value={contact.course}
          onChange={(e) => setContact({ ...contact, course: e.target.value })}
        />
      </div>
      <button type="submit" className="add-button">
        {currentContact.id ? 'Update' : 'Add'}
      </button>
    </form>
    </>
  );
}

export default ContactForm;
