import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";
import { format } from "date-fns";

export const EventCard = ({ id, title, description, organizer, date }) => {
  const [eventDate, eventTime] = format(
    new Date(date),
    "dd MMM yyyy-HH:mm"
  ).split("-");
  return (
    <div className="event-card">
      <h2 className="event-title">{title}</h2>
      <div className="event-info">
        <p className="event-org">{organizer}</p>
        <div className="date-wrapper">
          <p className="event-date">{eventDate}</p>
          <p className="event-time">{eventTime}</p>
        </div>
      </div>
        <p className="event-desc">{description}</p>
      <div className="links-wrapper">
        <Link className="event-card-link" to={`/registration/${id}`}>
          Register
        </Link>
        <Link className="event-card-link" to={`/participants/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
};
