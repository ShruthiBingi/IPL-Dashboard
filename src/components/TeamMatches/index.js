// Write your code here
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {teamMatchesUrl: '', latestMatch: {}, matchCard: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesUrl()
    // this.getLatestMatch()
    // this.getMatchCard()
  }

  getTeamMatchesUrl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(match)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedUrl = {
      teamBannerUrl: data.team_banner_url,
    }

    const {latest_match_details, recent_matches} = data

    const {
      umpires,
      result,
      man_of_the_match,
      date,
      venue,
      competing_team,
      competing_team_logo,
      first_innings,
      second_innings,
      match_status,
    } = latest_match_details

    const updatedLatestMatch = {
      id: latest_match_details.id,
      umpires: umpires,
      result: result,
      manOfTheMatch: man_of_the_match,
      date: date,
      venue: venue,
      competingTeam: competing_team,
      competingTeamLogo: competing_team_logo,
      firstInnings: first_innings,
      secondInnings: second_innings,
      matchStatus: match_status,
    }

    const updatedMatchCard = recent_matches.map(eachObject => ({
      id: eachObject.id,
      umpires: eachObject.umpires,
      result: eachObject.result,
      manOfTheMatch: eachObject.man_of_the_match,
      date: eachObject.date,
      venue: eachObject.venue,
      competingTeam: eachObject.competing_team,
      competingTeamLogo: eachObject.competing_team_logo,
      firstInnings: eachObject.first_innings,
      secondInnings: eachObject.second_innings,
      matchStatus: eachObject.match_status,
    }))

    this.setState({
      teamMatchesUrl: updatedUrl,
      latestMatch: updatedLatestMatch,
      matchCard: updatedMatchCard,
      isLoading: false,
    })
  }

  render() {
    const {teamMatchesUrl, latestMatch, matchCard, isLoading} = this.state

    return (
      <div className="div-red">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div>
              <img
                src={teamMatchesUrl.teamBannerUrl}
                alt="team banner"
                className="img"
              />
            </div>

            <div>
              <p> Latest Matches </p>
              <LatestMatch latestMatchDetails={latestMatch} />
            </div>

            <ul className="ul">
              {matchCard.map(each => (
                <MatchCard key={each.id} matchCardDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
