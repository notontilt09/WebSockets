import React from 'react'

export default ({ name, message, color }) =>
  <p className="line">
    <strong className="speaker" style={{'color': color}}>{name}:</strong> <span className="message">{message}</span>
  </p>
