import React from 'react';

const SingleItem = ({ statusBlock, statusKey, statusDelete }) => {
  return(
    <div className="status">
      <p>{ statusBlock }</p>
      <div className="delete-update"
        onClick={ () => statusDelete(statusKey) }
      >
        <i className="fa fa-times fa-fw"></i>
      </div>
    </div>
  )
}

export default SingleItem;