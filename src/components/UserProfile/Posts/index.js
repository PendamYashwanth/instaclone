// REACT-ICONS
import {BsGrid3X3} from 'react-icons/bs'
import {AiFillCamera} from 'react-icons/ai'
// Components
import PostItem from './PostItem'
// CSS-IN-JS
import {
  PostsItemsContainer,
  IconContainer,
  Text,
  NoPostsIconContainer,
  NoPostsIcon,
  NoPostsContainer,
} from './styledComponents'

const Posts = props => {
  const {postsDetails} = props
  console.log(postsDetails.length)
  const noOfPosts = postsDetails.length
  return (
    <>
      <div className="d-flex align-items-center pl-2">
        <IconContainer>
          <BsGrid3X3 />
        </IconContainer>
        <Text>Posts</Text>
      </div>
      {noOfPosts !== 0 ? (
        <PostsItemsContainer>
          {postsDetails.map(eachPost => (
            <PostItem key={eachPost.id} postDetails={eachPost} />
          ))}
        </PostsItemsContainer>
      ) : (
        <NoPostsContainer>
          <NoPostsIconContainer className="mb-3">
            <NoPostsIcon>
              <AiFillCamera />
            </NoPostsIcon>
          </NoPostsIconContainer>
          <Text>No Posts Yet</Text>
        </NoPostsContainer>
      )}
    </>
  )
}

export default Posts
