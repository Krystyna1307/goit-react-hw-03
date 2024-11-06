import "modern-normalize";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { useState } from "react";
import contacts from "./../assets/contacts.json";
import { nanoid } from "nanoid";

const App = () => {
  const [names, setNames] = useState(contacts);
  const [filter, setFilter] = useState("");
  const handleAddName = (name, number) => {
    const newName = {
      // id: Date.now().toString(),
      id: nanoid(),
      name,
      number,
    };
    setNames((prev) => [...prev, newName]);
  };
  const handleDeleteName = (id) => {
    setNames((prev) => prev.filter((item) => item.id !== id)); //Повертаємо нову колекцію без того елемента, який має id
  };

  const visibleTasks = names.filter((name) =>
    name.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddName={handleAddName} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList names={visibleTasks} handleDeleteName={handleDeleteName} />
    </div>
  );
};

export default App;
