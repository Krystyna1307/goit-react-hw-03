import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.wrapper}>
      <p>Find contacts by name</p>
      <input
        type="name"
        name="name"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
