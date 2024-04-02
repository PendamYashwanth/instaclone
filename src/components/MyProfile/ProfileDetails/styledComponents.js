import styled from 'styled-components'

export const UserProfileBgContainer = styled.div`
  margin-top: 33px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const UserProfileBgContainerLg = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 33px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ProfileBgContainer = styled.div`
  width: 96px;
  height: 96px;
  margin-right: 24px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
    margin-right: 64px;
  }
`
export const ProfileImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 90px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`
export const UserName = styled.p`
  color: #262626;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #262626;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`
export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CountText = styled.p`
  color: #262626;
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Count = styled(CountText)`
  font-weight: 500;
  @media screen and (min-width: 768px) {
    margin-right: 5px;
  }
`
export const UserId = styled.p`
  color: #262626;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`
export const UserBio = styled.p`
  color: #262626;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`
