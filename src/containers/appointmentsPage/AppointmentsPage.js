import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ 
  contacts,
  appointments,
  createAppointment 
}) => {
  /*
  State variables for
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  /*
  Can extend validation logic below
  with handlers (in future if desired)
  */
  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  }

  const handleContactChange = (e) => {
    const { value } = e.target;
    setContact(value);
  }

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  }

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setTime(value);
  }

  const clearForm = () => {
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add appt info and clear form data
    */
   createAppointment(title, contact, date, time);
   clearForm();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={handleTitleChange}
          setContact={handleContactChange}
          setDate={handleDateChange}
          setTime={handleTimeChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
