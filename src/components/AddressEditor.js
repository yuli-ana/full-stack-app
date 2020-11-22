import React from "react";
import Field from "./Field";

const AddressEditor = ({ address, onChange }) => (
  <div>
    <Field
      name="address"
      label="Address"
      value={address.address}
      onChange={onChange}
    />
    <Field name="city" label="City" value={address.city} onChange={onChange} />
    <Field
      name="province"
      label="State / Province"
      value={address.province}
      onChange={onChange}
    />
    <Field
      name="country"
      label="Country"
      value={address.country}
      onChange={onChange}
    />
    <Field
      name="postalCode"
      label="Zip / Postal Code"
      value={address.postalCode}
      onChange={onChange}
    />
  </div>
);

export default AddressEditor;
