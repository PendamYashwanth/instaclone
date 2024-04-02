import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SlickContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 10px;
`
export const SlickItemContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StoryImgContainer = styled.div`
  min-width: 40px;
  min-height: 40px;
  max-width: 70px;
  max-height: 70px;
  flex-shrink: 0;
`

export const StoryImg = styled.img`
  min-width: 40px;
  min-height: 40px;
  max-width: 70px;
  max-height: 70px;
  flex-shrink: 0;
  border-radius: 35px;
`

export const UserName = styled.p`
  color: #262626;
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
