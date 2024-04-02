// REACT
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
// THIRD PARTY PACKAGES
import Cookies from 'js-cookie'
// CSS-IN-JS
import {
  LoginBgContainer,
  LoginContentContainer,
  LoginFormContainer,
  WebsiteLogoContainer,
  WebsiteLogo,
  WebsiteName,
  Form,
  InputFieldContainer,
  Label,
  UsernameInput,
  PasswordInput,
  LoginButton,
  IllustrationContainer,
  Illustration,
  ReqMsg,
  ErrorMsg,
} from './styledComponents'
// CSS
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    blurUsername: false,
    blurPassword: false,
    errorMsg: '',
  }

  // HANDLE USERNAME
  onBlurUserName = event => {
    if (event.target.value === '') {
      this.setState({blurUsername: true})
    } else {
      this.setState({blurUsername: false})
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  // HANDLE PASSWORD
  onBlurPassword = event => {
    if (event.target.value === '') {
      this.setState({blurPassword: true})
    } else {
      this.setState({blurPassword: false})
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  // FORM VALIDATION
  validateUserNameAndPassword = () => {
    const {username, password} = this.state
    if (username === '' && password === '') {
      this.setState({blurUsername: true, blurPassword: true})
    } else if (username === '') {
      this.setState({blurUsername: true})
    } else if (password === '') {
      this.setState({blurPassword: true})
    } else {
      this.setState({blurUsername: false, blurPassword: false})
    }
  }

  // AUTHENTICATION SUCCESS
  onAuthenticationSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  // AUTHENTICATION FAIL
  onAuthenticationFail = errorMsg => {
    this.setState({errorMsg})
  }

  // AUTHENTICATION
  performAuthentication = async () => {
    const {blurUsername, blurPassword} = this.state
    if (blurUsername === false && blurPassword === false) {
      const {username, password} = this.state
      const userDetails = {username, password}
      const LoginAPI = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(LoginAPI, options)
      if (response.ok === true) {
        const data = await response.json()
        console.log(data)
        const jwtToken = data.jwt_token
        this.onAuthenticationSuccess(jwtToken)
      } else {
        const data = await response.json()
        const errorMsg = data.error_msg
        this.onAuthenticationFail(errorMsg)
      }
    }
  }

  onSubmitLoginForm = event => {
    event.preventDefault()
    this.validateUserNameAndPassword()
    this.performAuthentication()
  }

  // RENDER
  renderUserNameField = () => {
    const {username, blurUsername} = this.state
    return (
      <InputFieldContainer>
        <Label htmlFor="username">username</Label>
        <UsernameInput
          id="username"
          type="text"
          placeholder="rahul"
          onBlur={this.onBlurUserName}
          onChange={this.onChangeUserName}
          value={username}
          blur={blurUsername}
          autoComplete="current-password"
        />
        {blurUsername && <ReqMsg>*required</ReqMsg>}
      </InputFieldContainer>
    )
  }

  renderPasswordField = () => {
    const {password, blurPassword} = this.state
    return (
      <InputFieldContainer className="d-flex flex-column">
        <Label htmlFor="password">password</Label>
        <PasswordInput
          id="password"
          type="password"
          placeholder="Rahul@2021"
          onBlur={this.onBlurPassword}
          onChange={this.onChangePassword}
          value={password}
          blur={blurPassword}
          autoComplete="current-password"
        />
        {blurPassword && <ReqMsg>*required</ReqMsg>}
      </InputFieldContainer>
    )
  }

  renderLoginIllustration = () => (
    <IllustrationContainer>
      <Illustration
        src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698741720/Illustration_mml1dq.svg"
        alt=""
      />
    </IllustrationContainer>
  )

  render() {
    const {errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginBgContainer>
        <LoginContentContainer>
          {this.renderLoginIllustration()}
          <LoginFormContainer>
            <WebsiteLogoContainer>
              <WebsiteLogo
                src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698744357/Standard_Collection_8_xfka3j.svg"
                alt="website login"
              />
              <WebsiteName>Insta Share</WebsiteName>
            </WebsiteLogoContainer>
            <Form onSubmit={this.onSubmitLoginForm}>
              {this.renderUserNameField()}
              {this.renderPasswordField()}
              <LoginButton type="submit">Login</LoginButton>
              {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
            </Form>
          </LoginFormContainer>
        </LoginContentContainer>
      </LoginBgContainer>
    )
  }
}

export default Login
