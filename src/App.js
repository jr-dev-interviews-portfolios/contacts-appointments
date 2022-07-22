import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  State variables defined below for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Functions to add new
  contacts and appointments
  */
  const createContact = (name, phone, email) => {
    const newContact = {
      name,
      phone,
      email
    };
    setContacts([...contacts, newContact]);
  }

  const createAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title,
      contact,
      date,
      time
    };
    setAppointments([...appointments, newAppointment]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} createContact={createContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              createAppointment={createAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
