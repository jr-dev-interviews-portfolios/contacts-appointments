import React from "react";

export const ContactPicker = ({ name, value, contacts, handleChange }) => {
  return (
    <select name={name} value={value} onChange={handleChange}>
      <option value="" key="-1" selected>Please select a contact</option>
      {contacts.map((contact, idx) => {
        return <option key={idx} value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
