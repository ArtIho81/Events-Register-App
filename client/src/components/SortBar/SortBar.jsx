import React from "react";
import "./SortBar.css";

export const SortBar = ({ sorts, activeSort, setActiveSort }) => {
  const viewActiveSort = (item) => {
    return activeSort === item ? "active" : "";
  };
  const getSortOrder = (item) => {
    const [sortBy, sortOrder] = item.split(" ");
    if (sortOrder === "ASC") {
      return `${sortBy} +`;
    }
    if (sortOrder === "DESC") {
      return `${sortBy} -`;
    }
  };

  return (
    <div className="sort-bar">
      <p>Sort by</p>
      <ul className="sort-bar-list">
        {sorts.map((item) => (
          <li
            key={item}
            data-value={item}
            className={`sort-bar-item ${viewActiveSort(item)}`}
            onClick={(e) => setActiveSort(e.target.getAttribute("data-value"))}
          >
            {getSortOrder(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
