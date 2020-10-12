import React from 'react'
import './Contact.css'

const Contact = () => {
  const name = 'Carol Kim'
  const avatar = 'https://randomuser.me/api/portraits/women/74.jpg'
  const online = true
  return (
    <div className="Contact">
      <img
        className='avatar'
        src={avatar}
        alt="avatar"
      />
      <p className="name">{name}</p>
      <div className="status">
        <p className={online? 'status-online' : 'status-offline'}></p>
        <p className="status-text">
          {online? 'online' : 'offline'}
        </p>
      </div>
    </div>
  )
}

export default Contact