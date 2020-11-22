import React, { useState } from "react";

import Field from "./Field";
import AddressEditor from "./AddressEditor";

function AddCompany(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState({});

  const updateAddressField = (e) => {
    const addressState = Object.assign({}, address);
    addressState[e.target.name] = e.target.value;
    setAddress(addressState);
  };

  const updateField = (e) => {
    setName(e.target.value);
  };

  const addRecord = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, address }),
      });
      if (response.ok) {
        props.onAdd();
      } else {
        console.log("Error saving record");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={addRecord}>
        <Field label="Name" value={name} name="name" onChange={updateField} />
        <AddressEditor address={address} onChange={updateAddressField} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default AddCompany;
