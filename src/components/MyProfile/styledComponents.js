import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const UserProfileBgContainer = styled.div`
  flex-grow: 1;
  background-color: #fafafa;
  overflow-y: auto;
`
export const UserProfileResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1040px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
