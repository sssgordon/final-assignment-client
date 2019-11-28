import React, { Component, useState, useEffect } from "react";
import Events from "./Events";
import Pagination from "./Pagination";
import { connect } from "react-redux";
// import { getEvents } from "../../actions/events";
import request from "superagent";

function EventsContainer(props) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(9);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await request("http://localhost:4000/events");
      setEvents(response.body);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  // Get current posts
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Events</h1>
      <Events events={currentEvents} loading={loading} user={props.user} />
      <Pagination
        eventsPerPage={eventsPerPage}
        totalEvents={events.length}
        paginate={paginate}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(EventsContainer);
