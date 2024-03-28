import React from 'react'
import './index.css'

const MatchCard = (props) => {
    const {matchCardDetails} = props
    const { competingTeam , competingTeamLogo , result , matchStatus} = matchCardDetails

  return (
    <li className={`match-card`}>
      <img src={competingTeamLogo  } alt='prev-matches' className='prev'/>
      <h2 className='opposite-team-name'> {competingTeam} </h2>
      <p className='result'> {result} </p>
      <h3 className={`status-${matchStatus}`}> {matchStatus} </h3>
    </li>
  )
}

export default MatchCard