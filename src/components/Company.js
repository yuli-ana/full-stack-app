import React from "react";
import Address from "./Address";

const Company = ({ name, address }) => (
  <div className="company address-entry">
    <div className="name">{name}</div>
    {/* Address Component Here */}
    <Address address={address} />
  </div>
);

export default Company;
