// REACT
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
// THIRD-PARTY-PACKAGES
import Cookies from 'js-cookie'
// COMPONENTS
import Login from './components/Login'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import MyProfile from './components/MyProfile'
import SearchResults from './components/SearchResults'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
// CONTEXT
import instaShareContext from './context/instaShareContext'
// CSS
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class App extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    postsData: [],
  }

  onClickSearch = value => {
    this.setState({searchInput: value}, this.getSearchResults)
  }

  tryAgain = () => {
    this.getSearchResults()
  }

  getSearchResults = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const searchAPI = `https://apis.ccbp.in/insta-share/posts?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(searchAPI, options)
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

  render() {
    const {searchInput, apiStatus, postsData} = this.state
    return (
      <instaShareContext.Provider
        value={{
          searchInput,
          onClickSearch: this.onClickSearch,
          apiStatus,
          postsData,
          tryAgain: this.tryAgain,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/profile" component={MyProfile} />
          <ProtectedRoute
            exact
            path="/search-results"
            component={SearchResults}
          />
          <ProtectedRoute
            exact
            path="/user-profile/:userId"
            component={UserProfile}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </instaShareContext.Provider>
    )
  }
}

export default App
