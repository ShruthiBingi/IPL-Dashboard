// Write your code here
// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {iplListDetails} = props
  const {id, name, teamImageUrl} = iplListDetails

  return (
    <li className="li">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="card-img" />
        <p className="heading">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
