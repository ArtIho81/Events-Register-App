import React, { useEffect, useState } from "react";
import { EventCard } from "../components/Cards/EventCard";
import { endPoints, serverURL } from "../config";
import { Pagination } from "../components/Pagination/Pagination";
import "./EventsBoardPage.css";

export const EventsBoardPage = () => {
  const limit = 4;
  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState(limit);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const query = `?limit=${limit}&page=${currentPage}`;
    fetch(`${serverURL}${endPoints.getEvents}${query}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
        setTotal(data.total);
      });
  }, [currentPage]);

  const pagesQty = Math.ceil(total / limit);
  const changePage = (page) => {
    const [prev, next] = [0, pagesQty + 1];
    if (page !== prev && page !== next) {
      return setCurrentPage(page);
    }
    if (page === prev && currentPage > 1) {
      return setCurrentPage(currentPage - 1);
    }
    if (page === next && currentPage < pagesQty) {
      return setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <h1 className="page-title">Events</h1>
      <div className="wrapper">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      {limit < total && (
        <Pagination
          currentPage={currentPage}
          pagesQty={pagesQty}
          onChangePage={changePage}
        />
      )}
    </>
  );
};
