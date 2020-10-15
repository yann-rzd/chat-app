import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      online : false
    }
  }

  event = () => {
    const newStatus = !this.state.online
    this.setState({online: newStatus})
  }

  render () {
    return (
      <div className="Contact">
        <img
          className='avatar'
          src={this.props.avatar}
          alt="avatar"
        />
        <div className="info">
          <div>
            <p className="name">{this.props.name}</p>
          </div>
          <div className="status">
          <p className={this.state.online? 'status-online' : 'status-offline'} onClick={this.event}></p>
          <p className="status-text"> 
            {this.state.online? 'online' : 'offline'}
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Contact