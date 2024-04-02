import {Component} from 'react'
// THIRD-PARTY-PACKAGES
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
// COMPONENTS
import Header from '../Header'
import ProfileDetails from './ProfileDetails'
import Posts from './Posts'
import Stories from './Stories'
// CSS-IN-JS
import {
  BgContainer,
  UserProfileBgContainer,
  UserProfileResponsiveContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MyProfile extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    profileDetailsData: '',
    storiesData: [],
    postsData: [],
  }

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const userProfileAPI = `https://apis.ccbp.in/insta-share/my-profile`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(userProfileAPI, options)
    if (response.ok) {
      const data = await response.json()
      const userDetails = data.profile
      const {posts} = userDetails
      const {stories} = userDetails
      const formatUserDetails = {
        id: userDetails.id,
        followersCount: userDetails.followers_count,
        followingCount: userDetails.following_count,
        postsCount: userDetails.posts_count,
        profilePic: userDetails.profile_pic,
        userBio: userDetails.user_bio,
        userId: userDetails.user_id,
        userName: userDetails.user_name,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        profileDetailsData: formatUserDetails,
        storiesData: stories,
        postsData: posts,
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
    const {profileDetailsData, storiesData, postsData} = this.state
    return (
      <>
        <ProfileDetails userDetails={profileDetailsData} />
        <Stories storiesDetails={storiesData} />
        <Posts postsDetails={postsData} />
      </>
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
    return (
      <BgContainer>
        <Header />
        <UserProfileBgContainer>
          <UserProfileResponsiveContainer>
            {this.renderAllViews()}
          </UserProfileResponsiveContainer>
        </UserProfileBgContainer>
      </BgContainer>
    )
  }
}

export default MyProfile
