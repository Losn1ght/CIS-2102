import './stylelist.css'


function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div>
              <strong>Name:</strong> {contact.name}
            </div>
            <div>
              <strong>Age:</strong> {contact.age}
            </div>
            <div>
              <strong>Contact Number:</strong> {contact.contactNumber}
            </div>
            <div>
              <strong>Course:</strong> {contact.course}
            </div>
            <div>
              <button
                onClick={() => editContact(contact)}
                className="edit-button" 
              >
                Edit
              </button>
              <button
                onClick={() => deleteContact(contact.id)}
                className="delete-button" 
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

