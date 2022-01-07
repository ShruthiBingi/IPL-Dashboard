// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {iplList: [], isLoad: true}

  componentDidMount() {
    this.getiplList()
  }

  getiplList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    // console.log(teams)
    const updatedData = teams.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))
    this.setState({iplList: updatedData, isLoad: false})
  }

  render() {
    const {iplList, isLoad} = this.state

    return (
      <div className="bg-container">
        {isLoad ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="img-logo"
            />
            <h1> IPL Dashboard </h1>
            <ul className="ul">
              {iplList.map(eachObj => (
                <TeamCard key={eachObj.id} iplListDetails={eachObj} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
