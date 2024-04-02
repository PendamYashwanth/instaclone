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
  @media screen and (max-height: 767px) {
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
