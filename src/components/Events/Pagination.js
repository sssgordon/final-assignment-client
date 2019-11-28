import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

export default function Pagination({ eventsPerPage, totalEvents, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="#top"
              onClick={() => paginate(number)}
              className="page-link page-number"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
