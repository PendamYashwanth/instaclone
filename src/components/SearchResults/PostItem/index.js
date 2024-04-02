// REACT
import {Component} from 'react'
// THIRD-PARTY-PACKAGES
import Cookies from 'js-cookie'
// REACT-ICONS
import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'
// CSS-IN-JS
import {
  PostItemContainer,
  PostProfileContainer,
  PostProfilePicContainer,
  ProfilePic,
  PostUserName,
  PostImgContainer,
  PostImg,
  PostDetailsContainer,
  IconsContainer,
  IconContainer,
  HeartIcon,
  LikesText,
  Caption,
  CommentItemsContainer,
  CommentItem,
  CommentUserName,
  Comment,
  CustomLink,
} from './styledComponents'

import './index.css'

const RenderComment = props => {
  const {eachComment} = props
  const {comment, userId, userName} = eachComment
  return (
    <CommentItem key={userId}>
      <Comment>
        <CommentUserName as="span">{userName}</CommentUserName> {comment}
      </Comment>
    </CommentItem>
  )
}

class PostItem extends Component {
  state = {postId: '', isPostLiked: false}

  onClickLikeButton = postId => {
    this.setState(
      prevState => ({isPostLiked: !prevState.isPostLiked, postId}),
      this.makePostLikeHttpReq,
    )
  }

  makePostLikeHttpReq = async () => {
    const {postId, isPostLiked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const postLikeAPI = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const likeStatus = {
      like_status: isPostLiked,
    }
    const options = {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(likeStatus),
    }
    const response = await fetch(postLikeAPI, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  render() {
    const {isPostLiked} = this.state
    const {postDetails} = this.props
    const {
      postId,
      userId,
      profilePic,
      userName,
      postDetailsImgUrl,
      postDetailsCaption,
      likesCount,
      comments,
    } = postDetails
    const formatCommentsData = comments.map(eachComment => ({
      comment: eachComment.comment,
      userId: eachComment.user_id,
      userName: eachComment.user_name,
    }))
    return (
      <PostItemContainer>
        <PostProfileContainer>
          <PostProfilePicContainer>
            <ProfilePic src={profilePic} alt="profile pic" />
          </PostProfilePicContainer>
          <CustomLink to={`/user-profile/${userId}`}>
            <PostUserName>{userName}</PostUserName>
          </CustomLink>
        </PostProfileContainer>
        <PostImgContainer>
          <PostImg src={postDetailsImgUrl} alt="post" />
        </PostImgContainer>
        <PostDetailsContainer>
          <IconsContainer className="d-flex">
            <IconContainer
              type="button"
              onClick={() => this.onClickLikeButton(postId)}
            >
              <HeartIcon>{isPostLiked ? <FcLike /> : <BsHeart />}</HeartIcon>
            </IconContainer>
            <IconContainer type="button">
              <HeartIcon>
                <FaRegComment />
              </HeartIcon>
            </IconContainer>
            <IconContainer type="button">
              <HeartIcon>
                <BiShareAlt />
              </HeartIcon>
            </IconContainer>
          </IconsContainer>
          <LikesText>
            {isPostLiked ? likesCount + 1 : likesCount} likes
          </LikesText>
          <Caption>{postDetailsCaption}</Caption>
          <CommentItemsContainer>
            {formatCommentsData.map(eachComment => (
              <RenderComment
                key={eachComment.userId}
                eachComment={eachComment}
              />
            ))}
          </CommentItemsContainer>
        </PostDetailsContainer>
      </PostItemContainer>
    )
  }
}

export default PostItem
