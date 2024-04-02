import styled from 'styled-components'

export const StoryItemContainer = styled.li`
  list-style-type: none;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border: 1px solid #c7c7cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 56px;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`
export const StoryImg = styled.img`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 56px;
  @media screen and (min-width: 768px) {
    width: 78px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 78px;
  }
`
