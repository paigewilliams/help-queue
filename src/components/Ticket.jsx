import React from "react";
import PropTypes from "prop-types";


function Ticket(props){
  const ticketInformation =
  <div>
    <h3>{props.location} - {props.names}</h3>
    <h4>{props.formattedWaitTime} ago</h4>
    <p><em>{props.issue}</em></p>
    <hr/>
  </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {alert('ticket belongs to ' + props.names);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;
