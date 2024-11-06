import React, { useState } from "react";
import s from "./ContactForm.module.css";

const ContactForm = ({ handleAddName }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігає перезавантаженню
    handleAddName(name, number); // Передаємо дані у функцію
    setName(""); // Очищаємо поле після додавання
    setNumber(""); // Очищаємо поле після додавання
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="phone"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required
            pattern="\d{3}-\d{2}-\d{2}"
            title="Будь ласка, введіть телефон у форматі 000-00-00"
          />
        </label>

        <button onClick={() => handleAddName(id)} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
