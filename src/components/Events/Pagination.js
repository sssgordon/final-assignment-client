import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ eventsPerPage, totalEvents, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Link
              to="/events/#"
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
