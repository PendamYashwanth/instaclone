// CSS-IN-JS
import {PostItemContainer, PostImg} from './styledComponents'

const PostItem = props => {
  const {postDetails} = props
  const {image} = postDetails
  return (
    <PostItemContainer>
      <PostImg src={image} alt="post" />
    </PostItemContainer>
  )
}

export default PostItem
