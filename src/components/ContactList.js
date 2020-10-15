import React from 'react'
import Contact from './Contact'


const users = [
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
  {
    name: 'Nellie Caldwell',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
  {
    name: 'Vernon Mason',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
  },
  {
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
  },
  {
    name: 'Juanita Phillips',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
  }
];

const ContactList = () => (
  <div>
    {users.map(item => (
     <Contact avatar name {...item}/>
    ))}
  </div>
);

export default ContactList