// CSS-IN-JS
import {StoryItemContainer, StoryImg} from './styledComponents'

const StoryItem = props => {
  const {storyDetails} = props
  const {image} = storyDetails
  return (
    <StoryItemContainer>
      <StoryImg src={image} alt="story" />
    </StoryItemContainer>
  )
}
export default StoryItem
