import {Component} from 'react'
// THIRD-PARTY-PACKAGES
import Loader from 'react-loader-spinner'
// COMPONENTS
import Header from '../Header'
import PostItem from './PostItem'
// CONTEXT
import instaShareContext from '../../context/instaShareContext'
// CSS-IN-JS
import {
  BgContainer,
  SearchResultsBgContainer,
  SearchResultsResponsiveContainer,
  SearchResultsContainer,
  PostItemContainer,
  MainHeading,
  FailureViewContainer,
  FailureViewImg,
  FailureViewHeading,
  FailureViewText,
  TryAgainButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SearchResults extends Component {
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

  renderNoSearchResultsView = () => (
    <FailureViewContainer>
      <FailureViewImg
        src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1699878073/Group_mzgj1r.svg"
        alt="search not found"
      />
      <FailureViewHeading>Search Not Found</FailureViewHeading>
      <FailureViewText>Try different keyword or search again</FailureViewText>
    </FailureViewContainer>
  )

  renderSuccessView = postsData => {
    const postDataLength = postsData.length
    if (postDataLength !== 0) {
      return (
        <>
          <MainHeading>Search Results</MainHeading>
          <SearchResultsContainer className="mb-3">
            <PostItemContainer>
              {postsData.map(eachPost => (
                <PostItem key={eachPost.postId} postDetails={eachPost} />
              ))}
            </PostItemContainer>
          </SearchResultsContainer>
        </>
      )
    }
    return this.renderNoSearchResultsView()
  }

  renderFailureView = tryAgain => (
    <FailureViewContainer>
      <FailureViewImg
        src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1699880029/Group_7522_ugqllo.svg"
        alt="failure"
      />
      <FailureViewHeading>
        Something went wrong. Please try again
      </FailureViewHeading>
      <TryAgainButton onClick={tryAgain}>Try Again</TryAgainButton>
    </FailureViewContainer>
  )

  renderAllViews = (apiStatus, postsData, tryAgain) => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView(postsData)
      case apiStatusConstants.failure:
        return this.renderFailureView(tryAgain)
      default:
        return null
    }
  }

  render() {
    return (
      <instaShareContext.Consumer>
        {value => {
          const {postsData, apiStatus, tryAgain} = value
          return (
            <BgContainer>
              <Header />
              <SearchResultsBgContainer>
                <SearchResultsResponsiveContainer>
                  {this.renderAllViews(apiStatus, postsData, tryAgain)}
                </SearchResultsResponsiveContainer>
              </SearchResultsBgContainer>
            </BgContainer>
          )
        }}
      </instaShareContext.Consumer>
    )
  }
}

SearchResults.contextType = instaShareContext

export default SearchResults
