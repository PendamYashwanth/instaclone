import {Component} from 'react'
// THIRD-PARTY-PACKAGES
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
// COMPONENTS
import ReactSlick from './ReactSlick'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Stories extends Component {
  state = {apiStatus: apiStatusConstants.initial, userStoriesData: []}

  componentDidMount() {
    this.getStoriesData()
  }

  getStoriesData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const storiesAPI = 'https://apis.ccbp.in/insta-share/stories'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(storiesAPI, options)
    if (response.ok) {
      const data = await response.json()
      const usersStories = data.users_stories
      const formattedData = usersStories.map(eachItem => ({
        userId: eachItem.user_id,
        userName: eachItem.user_name,
        storyUrl: eachItem.story_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        userStoriesData: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="loader-container" data-testid="loader">
            <Loader
              type="TailSpin"
              color="#4094EF"
              height="53.3"
              width="53.3"
            />
          </div>
        </div>
      </div>
    </div>
  )

  renderSuccessView = () => {
    const {userStoriesData} = this.state
    return (
      <div className="p-1">
        <ReactSlick userStoriesData={userStoriesData} />
      </div>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return this.renderAllViews()
  }
}

export default Stories
