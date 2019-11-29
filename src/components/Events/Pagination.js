import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

export default function Pagination({ eventsPerPage, totalEvents, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <a
            href="#top"
            onClick={() => paginate(number)}
            className="page-number"
          >
            <li key={number} className="page-item">
              {number}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
