// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    firstInnings,
    date,
    venue,
    secondInnings,
    manOfTheMatch,
    umpires,
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = latestMatchDetails

  return (
    <div className="cont">
      <div>
        <p className="heading-1">{competingTeam}</p>
        <p className="heading-1">{date}</p>
        <p className="heading-2">{venue}</p>
        <p className="heading-2">{matchStatus}</p>
        <p className="heading-2">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="logo"
        />
      </div>
      <div>
        <p className="heading-1">First Innings</p>
        <p className="heading-2">{firstInnings}</p>
        <p className="heading-1">Second Innings</p>
        <p className="heading-2">{secondInnings}</p>
        <p className="heading-1">Man of the match </p>
        <p className="heading-2">{manOfTheMatch}</p>
        <p className="heading-1">Umpires</p>
        <p className="heading-2">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
