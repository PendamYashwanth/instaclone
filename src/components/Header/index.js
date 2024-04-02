// REACT
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
// THIRD-PARTY-PACKAGES
import Cookies from 'js-cookie'
// CONTEXT
import instaShareContext from '../../context/instaShareContext'
// CSS-IN-JS
import {
  HeaderBgContainer,
  HeaderContentContainer,
  WebsiteLogoContainer,
  WebsiteLogo,
  WebsiteName,
  MenuImgContainer,
  MenuImgButton,
  MenuImg,
  NavBar,
  NavItemsContainer,
  NavItem,
  LogoutButton,
  CloseImg,
  CloseButton,
  HeaderChildContainer,
  NavItemsContainerLg,
  InputFieldContainer,
  Input,
  SearchButton,
  SearchImg,
  CustomLink,
} from './StyledComponents'
// CSS
import './index.css'

class Header extends Component {
  state = {displayNavMenu: false, searchInput: ''}

  // SEARCH
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = (event, onClickSearch) => {
    const {searchInput} = this.state
    const path = window.location.pathname
    if (event.key === 'Enter') {
      console.log(searchInput)
      console.log(path)
      onClickSearch(searchInput)
      const {history} = this.props
      if (path !== 'search-results') {
        history.push('/search-results')
      }
    }
  }

  // LOGOUT
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  // RENDER
  renderMobileNavMenu = onClickSearch => {
    const {displayNavMenu, searchInput} = this.state
    const path = window.location.pathname
    if (displayNavMenu) {
      return (
        <NavBar>
          <NavItemsContainer>
            <NavItem>
              <CustomLink active={path === '/'} to="/">
                Home
              </CustomLink>
            </NavItem>
            <NavItem>
              <InputFieldContainer>
                <Input
                  type="search"
                  placeholder="Search Caption"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  onKeyDown={event => this.onSearch(event, onClickSearch)}
                />
                <SearchButton type="button">
                  <SearchImg
                    src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698815349/search_fsqgec.svg"
                    alt="search"
                  />
                </SearchButton>
              </InputFieldContainer>
            </NavItem>
            <NavItem>
              <CustomLink to="/profile" active={path === '/profile'}>
                Profile
              </CustomLink>
            </NavItem>
            <NavItem>
              <LogoutButton type="button" onClick={this.onClickLogout}>
                Logout
              </LogoutButton>
            </NavItem>
            <NavItem>
              <CloseButton type="button" onClick={this.onClickCloseImg}>
                <CloseImg
                  src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698780960/Solid_xrkdbx.svg"
                  alt="close"
                />
              </CloseButton>
            </NavItem>
          </NavItemsContainer>
        </NavBar>
      )
    }
    return null
  }

  renderLargeHeader = onClickSearch => {
    const path = window.location.pathname
    const {searchInput} = this.state
    return (
      <HeaderChildContainer>
        <InputFieldContainer>
          <Input
            type="search"
            placeholder="Search Caption"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            onKeyDown={event => this.onSearch(event, onClickSearch)}
          />
          <SearchButton type="button">
            <SearchImg
              src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698815349/search_fsqgec.svg"
              alt="search"
            />
          </SearchButton>
        </InputFieldContainer>
        <NavBar>
          <NavItemsContainerLg>
            <NavItem>
              <CustomLink to="/" active={path === '/'}>
                Home
              </CustomLink>
            </NavItem>
            <NavItem>
              <CustomLink to="/profile" active={path === '/profile'}>
                Profile
              </CustomLink>
            </NavItem>
            <NavItem>
              <LogoutButton type="button" onClick={this.onClickLogout}>
                Logout
              </LogoutButton>
            </NavItem>
          </NavItemsContainerLg>
        </NavBar>
      </HeaderChildContainer>
    )
  }

  toggleDisplayNavMenu = () => {
    this.setState(prevState => ({displayNavMenu: !prevState.displayNavMenu}))
  }

  onClickCloseImg = () => {
    this.setState({displayNavMenu: false})
  }

  render() {
    const {displayNavMenu} = this.state
    return (
      <instaShareContext.Consumer>
        {value => {
          const {onClickSearch} = value
          return (
            <>
              <HeaderBgContainer>
                <HeaderContentContainer>
                  <CustomLink to="/">
                    <WebsiteLogoContainer>
                      <WebsiteLogo
                        src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698744357/Standard_Collection_8_xfka3j.svg"
                        alt="website logo"
                      />
                      <WebsiteName>Insta Share</WebsiteName>
                    </WebsiteLogoContainer>
                  </CustomLink>
                  <MenuImgContainer>
                    <MenuImgButton
                      type="button"
                      onClick={this.toggleDisplayNavMenu}
                    >
                      <MenuImg
                        src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698778674/menu_ytqwjg.svg"
                        alt="menu"
                      />
                    </MenuImgButton>
                  </MenuImgContainer>
                  {this.renderLargeHeader(onClickSearch)}
                </HeaderContentContainer>
              </HeaderBgContainer>
              {displayNavMenu && this.renderMobileNavMenu(onClickSearch)}
            </>
          )
        }}
      </instaShareContext.Consumer>
    )
  }
}

export default withRouter(Header)
