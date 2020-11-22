import React from "react";

const Address = ({ address }) => {
  if (address) {
    return (
      <div>
        <div>{address.address}</div>
        <div>
          {address.city}, {address.province}, {address.country}
        </div>
        <div>{address.postalCode}</div>
      </div>
    );
  } else {
    return <div>(no address)</div>;
  }
};

export default Address;
