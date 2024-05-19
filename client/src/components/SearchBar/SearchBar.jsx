import React from "react";
import { Input } from "../Inputs/Input";
import { RadioButton } from "../Inputs/RadioButton";
import "./SearchBar.css";

const searchLabels = [
  { label: "Full name", value: "name" },
  { label: "E-mail", value: "email" },
];
export const SearchBar = ({
  value,
  onChange,
  checked,
  setChecked,
  onSearch,
}) => {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <Input type="text" value={value} onChange={onChange} />
        <div className="search-type">
          {searchLabels.map((input) => (
            <RadioButton
              key={input.label}
              {...input}
              checked={checked === input.value}
              onChange={() => setChecked(input.value)}
            />
          ))}
        </div>
      </div>
      <div className="search-btn">
      <button type="button" onClick={onSearch}>
        Search
      </button>
      </div>
    </div>
  );
};
