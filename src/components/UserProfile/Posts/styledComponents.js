import styled from 'styled-components'

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  @media screen and (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`

export const PostsItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
`

export const Text = styled.p`
  color: #262626;
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 0px;
  @media screen and (max-height: 767px) {
    font-size: 14px;
    line-height: 24px;
  }
`

export const NoPostsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoPostsIconContainer = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 43px;
  border: 2px solid #262626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoPostsIcon = styled.div`
  width: 43px;
  height: 43px;
  font-size: 43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`
