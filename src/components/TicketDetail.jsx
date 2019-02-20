import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props){
  return (
    <div>
      <h1>{props.selectedTicket.nae}</h1>
    </div>
  )
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
}

export default TicketDetail;
