import React from 'react'
import './Contact.css'

const users = [
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    online: false
  },
  {
    name: 'Nellie Caldwell',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    online: true
  },
  {
    name: 'Vernon Mason',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    online: true
  },
  {
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    online: false
  },
  {
    name: 'Juanita Phillips',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    online: true
  }
];

const ContactList = () => {
  return (
    <div className="Contact">
      {users.map(item => (
        <img className="avatar" src={item.avatar} alt={item.name} />
      ))}
      <div className="info">
        <div>
          {users.map(item => (
            <p className="name">{item.name}</p>
          ))}
        </div>
        <div className="status">
          {users.map(item => (
            <p className={item.online? "status-online" : "status-offline"}></p>
          ))}
          {users.map(item => (
            <p className="status-text">{item.online? "online" : "offline"}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactList