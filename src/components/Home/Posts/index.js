import {Component} from 'react'
// THIRD-PARTY-PACKAGES
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
// COMPONENTS
import PostItem from './PostItem'
// CSS-IN-JS
import {
  PostItemContainer,
  FailureViewContainer,
  FailureViewHeading,
  FailureViewImg,
  TryAgainButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Posts extends Component {
  state = {apiStatus: apiStatusConstants.initial, postsData: []}

  componentDidMount() {
    this.getPostsData()
  }

  getPostsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const postsAPI = 'https://apis.ccbp.in/insta-share/posts'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(postsAPI, options)
    if (response.ok) {
      const data = await response.json()
      const {posts} = data
      const formattedData = posts.map(eachItem => ({
        userId: eachItem.user_id,
        userName: eachItem.user_name,
        storyUrl: eachItem.story_url,
        postId: eachItem.post_id,
        profilePic: eachItem.profile_pic,
        postDetailsCaption: eachItem.post_details.caption,
        postDetailsImgUrl: eachItem.post_details.image_url,
        likesCount: eachItem.likes_count,
        createdAt: eachItem.created_at,
        comments: eachItem.comments,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        postsData: formattedData,
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
    const {postsData} = this.state
    return (
      <PostItemContainer>
        {postsData.map(eachPost => (
          <PostItem key={eachPost.postId} postDetails={eachPost} />
        ))}
      </PostItemContainer>
    )
  }

  tryAgain = () => {
    this.getPostsData()
  }

  renderFailureView = tryAgain => (
    <FailureViewContainer>
      <FailureViewImg
        src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1699882851/alert-triangle_wmj1wc.svg"
        alt="failure"
      />
      <FailureViewHeading>
        Something went wrong. Please try again
      </FailureViewHeading>
      <TryAgainButton onClick={tryAgain}>Try Again</TryAgainButton>
    </FailureViewContainer>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return this.renderAllViews()
  }
}

export default Posts
