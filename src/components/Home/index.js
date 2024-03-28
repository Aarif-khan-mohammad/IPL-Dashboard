import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component{

    state = {teamsData : [] }

    componentDidMount(){
        this.getTeamsData()
    }

    getTeamsData = async () =>{
        const  response = await fetch('https://apis.ccbp.in/ipl/');
        const data = await response.json();
        const dataTeams = data.teams;
        const updatedData = dataTeams.map((each)=>({
            id :each.id ,
            name: each.name,
            teamImageUrl : each.team_image_url
        }))

        this.setState({ teamsData : updatedData })
    }


    render(){
        const {teamsData} = this.state ;
        
        
        return(
            <div className='home'>
                <div className='title'>
                    <img src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt='logo' className='logo'/>
                    <span className='head'>IPL Dashboard</span>
                </div>
                <ul className='team-list'>
                    {teamsData.map((eachItem)=>(
                        <TeamCard teamCard = {eachItem} key={eachItem.id}/>
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Home