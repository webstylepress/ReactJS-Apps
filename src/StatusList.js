import React from 'react';
import SingleItem from './SingleItem'

const StatusList = ({ messages, statusDelete }) => {
  return(
    <div className="status-list">
      
      { messages.length < 1 ? (
        <p className="alert-info">
          No status updates available!
        </p>
      ) : null }

      { messages.map((status, index ) => (
        <SingleItem 
          statusBlock={ status }
          key={ index }
          statusKey={ index }
          statusDelete={ statusDelete }
        />
      ))}

    </div>
  )
}

export default StatusList;
