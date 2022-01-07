// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = matchCardDetails

  return (
    <li className="li">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="img-card"
      />
      <p className="heading-1">{competingTeam}</p>

      <p className="heading-1">{matchStatus}</p>
      <p className="heading-2">{result}</p>
    </li>
  )
}
export default MatchCard
