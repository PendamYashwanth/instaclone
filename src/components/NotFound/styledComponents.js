import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1040px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  min-width: 157px;
  min-height: 173px;
  max-width: 269px;
  max-height: 297px;
  padding: 0px 0.003px 0px 0.004px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 100%;
`

export const Heading = styled.h3`
  color: #262626;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
`

export const Text = styled.p`
  color: #989898;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`

export const HomeButton = styled.button`
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
