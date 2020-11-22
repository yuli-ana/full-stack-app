import React from "react";
import Address from "./Address";

const Contact = ({ firstName, lastName, address }) => (
  <div className="contact address-entry">
    <div className="name">
      {firstName} {lastName}
    </div>
    {/* Address Component Here */}
    <Address address={address} />
  </div>
);

export default Contact;
