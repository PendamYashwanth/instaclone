import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginContentContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const LoginFormContainer = styled.div`
  width: 100%;
  min-width: 312px;
  max-width: 360px;
  padding: 64px 48px 64px 48px;
  flex-shrink: 0;
  @media screen and (min-width: 767px) {
    border-radius: 8px;
    background: #fefeff;
    box-shadow: 0px 8px 40px 0px rgba(7, 7, 7, 0.08);
  }
`
export const WebsiteLogoContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const WebsiteLogo = styled.img`
  width: 78px;
  height: 40px;
  flex-shrink: 0;
  margin-bottom: 12px;
`
export const WebsiteName = styled.p`
  color: #262626;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`

export const Form = styled.form`
  width: 100%;
`

export const InputFieldContainer = styled.div`
  height: 64px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const Label = styled.label`
  color: #262626;
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
`
export const UsernameInput = styled.input`
  height: 40px;
  padding: 8px 16px 8px 16px;
  outline: none !important;
  border: ${props => (props.blur ? '1px solid #FF4D4D' : 'none')};
  background-color: ${props => (props.blur ? '#FFE5E5' : '#eee')};
  border-radius: 2px;
  color: #262626;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`

export const PasswordInput = styled.input`
  height: 40px;
  padding: 8px 16px 8px 16px;
  outline: none !important;
  border: none;
  border-radius: 2px;
  border: ${props => (props.blur ? '1px solid #FF4D4D' : 'none')};
  background-color: ${props => (props.blur ? '#FFE5E5' : '#eee')};
  color: #262626;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const LoginButton = styled.button`
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

export const IllustrationContainer = styled.div`
  width: 582px;
  height: 373px;
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 250px;
  }
  @media screen and (min-width: 991px) {
    width: 500px;
  }
`
export const Illustration = styled.img`
  width: 95%;
`

export const ReqMsg = styled.p`
  color: var(--light-red-500, #ef4444);
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.12px;
  margin-top: 0px;
`
export const ErrorMsg = styled.p`
  color: var(--light-red-500, #ef4444);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
`
