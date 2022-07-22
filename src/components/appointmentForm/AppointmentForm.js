import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contact,
  contacts,
  title,
  date,
  time,
  setContact,
  setTitle,
  setDate,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={setTitle} 
        required />
      <ContactPicker
        name="contact"
        value={contact}
        contacts={contacts}
        handleChange={setContact} />
      <input
        type="date"
        name="Date" 
        placeholder="Date"
        value={date}
        min={getTodayString()}
        onChange={setDate} 
        required />
      <input
        type="time"
        name="time"
        placeholder="Time"
        value={time}
        onChange={setTime} 
        required />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
