import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'

function Contact({avatar, name, online}) {
  return (
    <div className="Contact">
      <img
        className='avatar'
        src={avatar}
        alt="avatar"
      />
      <div className="info">
        <div>
          <p className="name">{name}</p>
        </div>
        <div className="status">
        <p className={online? 'status-online' : 'status-offline'}></p>
        <p className="status-text"> 
          {online? 'online' : 'offline'}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Contact