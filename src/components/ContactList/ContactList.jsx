import React, { useState } from "react";
import contacts from "./../../assets/contacts.json";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ names, handleDeleteName }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {names.map((item) => (
          <Contact
            key={item.id}
            {...item}
            handleDeleteName={handleDeleteName}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
