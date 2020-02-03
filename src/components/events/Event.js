import React, { useContext } from "react";
import { EventContext } from "./EventsProvider";
// import "./Events.css"

export default ({ event, props, friend, next }) => {
  const { deleteEvent } = useContext(EventContext);

  let eventSectionClass = "event";
  let eventDeleteButton = "";
  let eventEditButton = "";

  if (friend === true) {
    eventSectionClass = "friendEvent";
  } else {
    eventDeleteButton = (
      <>
        <button
          className="btn btn-light"
          onClick={() => {
            const confirm = window.confirm("Are you sure you want to delete this?")
            if (confirm === true) {
              deleteEvent(event)
            }
          }}
        >
          Delete
        </button>
      </>
    );
    eventEditButton = (
      <>
        <button
          className="btn btn-light"
          onClick={() => {
            props.history.push(`/editEvent/${event.id}`);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  if (next === true) {
    eventSectionClass = "latestEvent";
  }

  return (
    <section className={eventSectionClass}>
      <div className="eventCard">
        <div className="eventCardInfo">Name: {event.name}</div>
        <div className="eventCardInfo">Date: {event.formattedDate}</div>
        <div className="eventCardInfo">Location: {event.location}</div>
        {eventEditButton}
        {eventDeleteButton}
      </div>
    </section>
  );
};
