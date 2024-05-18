import React from "react";
import "./Pagination.css";

export const Pagination = ({ currentPage, pagesQty, onChangePage }) => {
  const pages = Array.from({ length: pagesQty + 2 }, (_, index) => index);
  const isActivePage = (page) => {
    return page === currentPage ? "active-page" : "";
  };
  const notActive = (page) => {
    if (
      (currentPage === 1 && page === 0) ||
      (currentPage === pagesQty && page === pagesQty + 1)
    ) {
      return "no-active";
    }
  };
  return (
    <div className="pagination-wrapper">
      {pages.map((page) => (
        <span
          key={page}
          className={`pagination-page-btn ${isActivePage(page)} ${notActive(
            page
          )}`}
          onClick={() => onChangePage(page)}
        >
          {page === 0 ? "prev" : page > pagesQty ? "next" : page}
        </span>
      ))}
    </div>
  );
};
