import { Component } from "react";
import './index.css'
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";

class TeamMatches extends Component{

    state = {latestMatches : [] , recentMatches: [] , banners : "" }

    componentDidMount(){
        this.getTeamMatchesData()
    }

    getTeamMatchesData = async () =>{
        const {match} = this.props
        const {params} = match
        const {id} = params
        
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const data = await response.json()
        const latestMatch = data.latest_match_details;
        const recentMatch = data.recent_matches;
        const banner = data.team_banner_url
        
        const updatedLatestMatches = {
            id : latestMatch.id ,
            competingTeam : latestMatch.competing_team,
            competingTeamLogo : latestMatch.competing_team_logo,
            date :latestMatch.date,
            firstInnings : latestMatch.first_innings,
            manOfTheMatch : latestMatch.man_of_the_match,
            matchStatus :latestMatch.match_status,
            result : latestMatch.result,
            secondInnings : latestMatch.second_innings,
            umpires : latestMatch.umpires,
            venue : latestMatch.venue
        }


        this.setState({latestMatches : updatedLatestMatches})

        const  updatedRecentMatches = recentMatch.map(eachMatch=>({
            id : eachMatch.id ,
            competingTeam : eachMatch.competing_team,
            competingTeamLogo : eachMatch.competing_team_logo,
            date :eachMatch.date,
            firstInnings : eachMatch.first_innings,
            manOfTheMatch : eachMatch.man_of_the_match,
            matchStatus :eachMatch.match_status,
            result : eachMatch.result,
            secondInnings : eachMatch.second_innings,
            umpires : eachMatch.umpires,
            venue : eachMatch.venue
            
        }))

        this.setState({recentMatches : updatedRecentMatches})
        this.setState({banners : banner})

    }

    render(){
        const {latestMatches , recentMatches , banners} = this.state
        const {id} = this.props.match.params;
        console.log(id)
        
        return(
            <div className={`${id}`}>
                <img src={banners} alt="banner" className="banner"/>
                <LatestMatch latestMatchDetails = {latestMatches} key={latestMatches.key} />
                <ul className="match-cards-container">
                    {recentMatches.map(eachCard=> (
                        <MatchCard matchCardDetails = {eachCard} key={eachCard.id} />
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default  TeamMatches; 