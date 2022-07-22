import React, { useEffect, useState } from "react";

import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({ contacts, createContact }) => {
  /*
  State variables defined for 
  contact info
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  // State to track duplicate contacts
  const [duplicateContact, setDuplicateContact] = useState(false);

  /*
  Using hooks, checking for contact name in the 
  contacts array variable passed in props
  */
  useEffect(() => {
    setDuplicateContact(!!contacts.find((contact) => {
      return contact.name.trim().toLowerCase() === name.trim().toLowerCase();
    }));
  }, [name, contacts]);

  /*
  Can add more validation logic in the
  handler functions below (in future 
  if desired)
  */
  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  }

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setPhone(value);
  }

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  }
  
  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDuplicateContact(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear the form data
    (if the contact name is not a duplicate)
    */
    if (!duplicateContact) {
      createContact(name, phone, email);
      clearForm();
    }
  };

  return (
    <>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          duplicate={duplicateContact}
          name={name}
          phone={phone}
          email={email}
          setName={handleNameChange}
          setPhone={handlePhoneChange}
          setEmail={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </>
  );
};
