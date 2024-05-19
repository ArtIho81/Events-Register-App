import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { ParticipantCard } from "../components/Cards/ParticipantCard";
import { endPoints, serverURL } from "../config";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const EventParticipantsPage = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const searchInput = useInput("");
  const [searchBy, setSearchBy] = useState("name");
  const [search, setSearch] = useState(0);

  useEffect(() => {
    const getParticipants = async () => {
      const searchQyery = `?search=${searchInput.value}&searchBy=${searchBy}`;
      const participantsUrl = `${serverURL}${endPoints.getParticipants}/${eventId}`;
      const url = search > 0 ? participantsUrl + searchQyery : participantsUrl;
      const response = await fetch(url);
      const data = await response.json();
      setParticipants(data.participants || []);
      setEventTitle(data.event);
    };
    getParticipants();
  }, [search]);

  return (
    <>
      <h1 className="page-title">{eventTitle} participants</h1>
      <SearchBar
        {...searchInput}
        checked={searchBy}
        setChecked={setSearchBy}
        onSearch={() => setSearch((prev) => prev + 1)}
      />
      <div className="wrapper">
        {participants.map((participant) => (
          <ParticipantCard key={participant.id} {...participant} />
        ))}
      </div>
    </>
  );
};
