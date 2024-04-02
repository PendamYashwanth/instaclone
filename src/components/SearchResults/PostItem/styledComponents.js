import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const CustomLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const PostItemContainer = styled.li`
  list-style-type: none;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid #dbdbdb;
  background: #fff;
  margin-bottom: 32px;
`

export const PostProfileContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 24px;
`
export const PostProfilePicContainer = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: 1.032px solid #e20337;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`
export const ProfilePic = styled.img`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 28px;
`
export const PostUserName = styled.p`
  color: #262626;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0px;
`
export const PostImgContainer = styled.div`
  width: 100%;
  max-height: 614px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
  border-top: 1px solid #dbdbdb;
  background: #fafafa;
`

export const PostImg = styled.img`
  width: 100%;
  max-height: 614px;
  @media screen and (min-width: 992px) {
    width: 60%;
    max-height: 614px;
  }
`

export const PostDetailsContainer = styled.div`
  padding-left: 24px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`

export const IconContainer = styled.button`
  background-color: transparent;
  border: none;
  outline: none !important;
  margin-right: 16px;
  margin-bottom: 16px;
`

export const HeartIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`

export const LikesText = styled.p`
  color: #262626;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 4px;
`

export const Caption = styled.p`
  color: #262626;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`

export const CommentItemsContainer = styled.ul`
  padding-left: 0px;
`
export const CommentItem = styled.li`
  list-style-type: none;
`

export const CommentUserName = styled(LikesText)``

export const Comment = styled(Caption)``
