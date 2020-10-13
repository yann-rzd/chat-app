import React from 'react'
import './Contact.css'

const Contact = props => {
  return (
    <div className="Contact">
      <img
        className='avatar'
        src={props.avatar}
        alt="avatar"
      />
      <div className="info">
        <div>
          <p className="name">{props.name}</p>
        </div>
        <div className="status">
        <p className={props.online? 'status-online' : 'status-offline'}></p>
        <p className="status-text"> 
          {props.online? 'online' : 'offline'}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Contact