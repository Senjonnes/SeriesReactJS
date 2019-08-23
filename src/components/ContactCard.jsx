import React from "react";

const ContactCard = (props) => {
  return (
    <div>
      <img src={props.contact.imgSrc} />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
};

export default ContactCard;
