import React from 'react'
import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const TeamCard = (props) => {
    const {teamCard} = props
    const {id , name , teamImageUrl} = teamCard
  return (
    <Link to={`/ipl/${id}`} className="linking">
        <li className='team-card'>
            <img src={teamImageUrl} alt='team-logo' className='team-logo'/>
            <span className='team-name'>{name}</span>
        </li>
    </Link>
    
  )
}

export default TeamCard
