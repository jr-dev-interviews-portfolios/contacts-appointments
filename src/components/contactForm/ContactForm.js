import React from "react";

import "./ContactForm.css";

export const ContactForm = ({
  duplicate,
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name"
        value={name}
        onChange={setName}
        required />
      {duplicate ? <p className="error">Contact already exists, please revise your entry.</p> : ""}
      <input 
        type="tel"
        name="phone"
        placeholder="Phone (###-###-####)"
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        value={phone}
        onChange={setPhone} 
        required />
      <input 
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        required />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
