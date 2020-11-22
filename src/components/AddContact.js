import React, { useState } from "react";

import Field from "./Field";
import AddressEditor from "./AddressEditor";

function AddContact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState({});

  const updateAddressField = (e) => {
    const addressState = { ...address };
    addressState[e.target.name] = e.target.value;

    setAddress(addressState);
  };

  const addRecord = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, address }),
      });
      if (response.ok) {
        props.onAdd();
      } else {
        console.log("Error when saving record");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={addRecord}>
        <Field
          label="First Name"
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Field
          label="Last Name"
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <AddressEditor address={address} onChange={updateAddressField} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default AddContact;
