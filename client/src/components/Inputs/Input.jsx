import React from "react";
import '../../pages/EventRegistrationPage.css'

export const Input = ({ type, label, value, onChange }) => {

  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
