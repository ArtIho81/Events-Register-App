import React from "react";
import '../../pages/EventRegistrationPage.css'

export const Input = ({ type, label, value, onChange , className }) => {

  return (
    <div className={className}>
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
