import styled from 'styled-components'

export const PostItemContainer = styled.ul`
  padding-left: 0px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
`
export const FailureViewImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

export const FailureViewHeading = styled.h3`
  color: #262626;
  text-align: center;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 150% */
`

export const FailureViewText = styled.h3`
  color: #989898;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */
`
export const TryAgainButton = styled.button`
  height: 40px;
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
