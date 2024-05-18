import '../../pages/EventRegistrationPage.css'

export const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <div className="radio-btn-wrapper">
      <input
        type="radio"
        id={label}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
