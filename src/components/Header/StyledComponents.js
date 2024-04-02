import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CustomLink = styled(({active, ...rest}) => <Link {...rest} />)`
  color: ${props => (props.active ? '#4094EF' : '#262626')};
  &:hover {
    color: #4094ef;
    text-decoration: none;
  }
`

export const HeaderBgContainer = styled.div`
  height: 64px;
`

export const HeaderContentContainer = styled.div`
  width: 90%;
  max-width: 1040px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const WebsiteLogoContainer = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const WebsiteLogo = styled.img`
  width: 55px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    width: 59px;
    height: 30px;
  }
`
export const WebsiteName = styled.p`
  color: #262626;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const MenuImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuImgButton = styled.button`
  background-color: transparent;
  outline: none !important;
  border: none;
`

export const MenuImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

export const NavBar = styled.nav`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`

export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`

export const LogoutButton = styled.button`
  height: 40px;
  width: 100%;
  padding: 8px 16px 8px 16px;
  flex-shrink: 0;
  border-width: 0px;
  outline: none !important;
  border-radius: 8px;
  background: #4094ef;
  color: #fff;
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  outline: none !important;
  border: none;
`

export const CloseImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

export const NavItemsContainerLg = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 992px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`

export const HeaderChildContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`
export const InputFieldContainer = styled.div`
  min-width: 214px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 3px;
  background-color: #dbdbdb;
  display: flex;
  padding: 1px;
`
export const Input = styled.input`
  height: 28px;
  width: 85%;
  padding: 8px 16px 8px 16px;
  outline: none !important;
  border: none;
  background-color: #fafafa;
  border-radius: 2px;
  color: #989898;
  color: #262626;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const SearchButton = styled.button`
  flex-grow: 1;
  background-color: transparent;
  outline: none !important;
  border: none;
`

export const SearchImg = styled.img`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
`
