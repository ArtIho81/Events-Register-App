import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { Input } from "../components/Inputs/Input";
import { RadioButton } from "../components/Inputs/RadioButton";
import { registerParticipant } from "../api";
import "./EventRegistrationPage.css";

const inputs = {
  name: { type: "text", label: "Full name" },
  email: { type: "email", label: "Email" },
  birthDate: { type: "date", label: "Date of birth" },
};
const radioInputs = ["Social media", "Friends", "Found myself"];

export const EventRegistrationPage = () => {
  const { eventId } = useParams();
  const name = useInput("");
  const email = useInput("");
  const birthDate = useInput("");
  const [checked, setChecked] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const participant = {
      name: name.value,
      email: email.value,
      birth_date: birthDate.value,
      source: checked,
    };
    const response = await registerParticipant(participant, eventId);
    if (response.status === 200) {
      navigate("/");
    } else {
      const data = await response.json();
      setMessage(data.message);
    }
  };

  return (
    <>
      <h1 className="page-title">Event registration</h1>
      <form className="reg-form">
        <Input {...inputs.name} {...name} />
        <Input {...inputs.email} {...email} />
        <Input {...inputs.birthDate} {...birthDate} />
        <div>
          <p className="input-label">Where did you hear about this event?</p>
          <div className="radio-wrapper">
            {radioInputs.map((input) => (
              <RadioButton
                key={input}
                label={input}
                checked={checked === input}
                onChange={() => setChecked(input)}
              />
            ))}
          </div>
        </div>
        <button className="submit-btn" type="submit" onClick={onSubmit}>
          Submit
        </button>
        <h1>{message}</h1>
      </form>
    </>
  );
};
