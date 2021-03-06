import React from 'react'

const PostStatus = ({ submitStatus, statusValue, statusOnChange }) => {
  return (
    <div className="update-area">
      <form onSubmit={ submitStatus }>
        <textarea
          className="updateField"
          rows="4"
          value={ statusValue }
          onChange={ event => statusOnChange(event) }
          placeholder="Type message here..."
        />
        { statusValue.trim().length > 0 ? (
          <div className="text-right">
            <button
              className="btnUpdate"
              type="submit">
                POST MESSAGE
            </button>
          </div>
        ) : null }
      </form>
    </div>
  )
}

export default PostStatus;