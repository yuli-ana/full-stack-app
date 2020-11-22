import React, { useState, useEffect, useCallback } from "react";
import Company from "./Company";
import Contact from "./Contact";

import AddCompany from "./AddCompany";
import AddContact from "./AddContact";

function AddressBook() {
  const [companies, setCompanies] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [adding, setAdding] = useState(null);
  // Ensure we are always calling the newest version of refresh
  const refresh = useCallback(async () => {
    setAdding(null);
    try {
      const response = await fetch("/api/companies");
      const companyRes = await response.json();
      const secondResponse = await fetch("/api/contacts");
      const contactsRes = await secondResponse.json();
      setCompanies(companyRes);
      setContacts(contactsRes);
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    refresh();
  }, [refresh]);

  const addCompany = () => {
    setAdding("company");
  };
  const addContact = () => {
    setAdding("contact");
  };

  return (
    <div>
      <div className="header">
        <h1>Address Book</h1>
        <button onClick={addCompany}>Add a company</button>
        <button onClick={addContact}>Add a contact</button>
      </div>

      {adding === "company" ? <AddCompany onAdd={refresh} /> : null}
      {adding === "contact" ? <AddContact onAdd={refresh} /> : null}

      {companies.map(company => {
        return <Company key={company._id} {...company} />;
      })}

      {contacts.map(contact => {
        return <Contact key={contact._id} {...contact} />;
      })}
    </div>
  );
}

export default AddressBook;
