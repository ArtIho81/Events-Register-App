import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ParticipantCard } from "../components/Cards/ParticipantCard";
import { endPoints, serverURL } from "../config";
import { Input } from "../components/Inputs/Input";

export const EventParticipantsPage = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [eventTitle, setEventTitle] = useState("");

  useEffect(() => {
    fetch(`${serverURL}${endPoints.getParticipants}/${eventId}`)
      .then((response) => response.json())
      .then((data) => {
        setParticipants(data.participants || []);
        setEventTitle(data.event);
      });
  }, []);

  return (
    <>
      <h1 className="page-title">{eventTitle} participants</h1>
      <div className="wrapper">
        {participants.map((participant) => (
          <ParticipantCard key={participant.id} {...participant} />
        ))}
      </div>
    </>
  );
};
