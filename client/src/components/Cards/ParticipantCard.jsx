import React from 'react'
import './ParticipantCard.css'

export const ParticipantCard = ({name, email}) => {
  return (
    <div className='participant-card'>
        <h2 className='participant-name'>{name}</h2>
        <p className='participant-email'>{email}</p>
    </div>
  )
}
