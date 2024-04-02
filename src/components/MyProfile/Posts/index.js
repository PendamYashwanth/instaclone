// REACT-ICONS
import {BsGrid3X3} from 'react-icons/bs'
// Components
import PostItem from './PostItem'
// CSS-IN-JS
import {PostsItemsContainer, IconContainer, Text} from './styledComponents'

const Posts = props => {
  const {postsDetails} = props
  console.log(postsDetails)
  return (
    <>
      <div className="d-flex align-items-center pl-2">
        <IconContainer>
          <BsGrid3X3 />
        </IconContainer>
        <Text>Posts</Text>
      </div>
      <PostsItemsContainer>
        {postsDetails.map(eachPost => (
          <PostItem key={eachPost.id} postDetails={eachPost} />
        ))}
      </PostsItemsContainer>
    </>
  )
}

export default Posts
