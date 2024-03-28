import React from 'react'
import './index.css'

const LatestMatch = (props) => {
    const {latestMatchDetails} = props
    const { competingTeam , competingTeamLogo , date , firstInnings , manOfTheMatch  , result , secondInnings , umpires ,venue} = latestMatchDetails

  return (
    <div className={`latest-card`}>
      <p className='latest-heading'>Latest Match</p>
      <div className='inner-card'>
        <div className='left'>
            <h2 className='opp-team-nam'>{competingTeam}</h2>
            <p className='date'>{date}</p>
            <p className='paras'> {venue} </p>
            <p className='paras'> {result} </p>
        </div>
        <img src={competingTeamLogo} alt='opp-logo' className='opp-logo'/>
        <div className='right'>
            <p className='para-head'>First Innings</p>
            <p className='para'> {firstInnings} </p>
            <p className='para-head'> Second Innings </p>
            <p className='para'> {secondInnings} </p>
            <p className='para-head'> Man Of The Match </p>
            <p className='para'> {manOfTheMatch} </p>
            <p className='para-head'>Umpires</p>
            <p className='para'> {umpires} </p>
        </div>
      </div>

    </div>
  )
}

export default LatestMatch
