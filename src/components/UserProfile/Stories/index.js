import StoryItem from './StoryItem'
// CSS-IN-JS
import {StoryItemsContainer} from './styledComponents'

const Stories = props => {
  const {storiesDetails} = props
  console.log(storiesDetails)
  return (
    <StoryItemsContainer>
      {storiesDetails.map(eachStory => (
        <StoryItem key={eachStory.id} storyDetails={eachStory} />
      ))}
    </StoryItemsContainer>
  )
}
export default Stories
