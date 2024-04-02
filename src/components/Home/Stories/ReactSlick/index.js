// REACT
import {Component} from 'react'
// THIRD-PARTY-PACKAGES
import Slider from 'react-slick'
// CSS-IN-JS
import {
  MainContainer,
  SlickContainer,
  SlickItemContainer,
  StoryImgContainer,
  StoryImg,
  UserName,
} from './styledComponents'
// CSS
import './index.css'

// SLIDER SETTINGS
const settings = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

class ReactSlick extends Component {
  renderSlider = userStoriesData => (
    <Slider {...settings}>
      {userStoriesData.map(eachStory => {
        const {userId, userName, storyUrl} = eachStory
        return (
          <div key={userId}>
            <SlickItemContainer>
              <StoryImgContainer>
                <StoryImg src={storyUrl} alt="company logo" />
              </StoryImgContainer>
              <UserName>{userName}</UserName>
            </SlickItemContainer>
          </div>
        )
      })}
    </Slider>
  )

  render() {
    const {userStoriesData} = this.props
    return (
      <MainContainer>
        <SlickContainer>{this.renderSlider(userStoriesData)}</SlickContainer>
      </MainContainer>
    )
  }
}

export default ReactSlick
