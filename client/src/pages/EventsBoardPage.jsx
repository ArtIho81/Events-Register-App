import React, { useEffect, useState } from "react";
import { EventCard } from "../components/Cards/EventCard";
import { endPoints, serverURL } from "../config";
import { Pagination } from "../components/Pagination/Pagination";
import { SortBar } from "../components/SortBar/SortBar";
import "./EventsBoardPage.css";

const sorts = ["Default", "Event", "Organizer", "Date"].reduce((acc, item) => {
  acc.push(`${item} ASC`);
  acc.push(`${item} DESC`);
  return acc;
}, []);

export const EventsBoardPage = () => {
  const limit = 9;
  const [activeSort, setActiveSort] = useState(`${sorts[0]}`);
  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState(limit);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const [sortBy, sortOrder] = activeSort.split(" ");
    const query = `?limit=${limit}&page=${currentPage}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
    fetch(`${serverURL}${endPoints.getEvents}${query}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
        setTotal(data.total);
      });
  }, [currentPage, activeSort]);

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
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <h1 className="page-title">Events</h1>
      <SortBar
        sorts={sorts}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />
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
