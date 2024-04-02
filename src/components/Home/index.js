// REACT
import {Component} from 'react'
// COMPONENTS
import Header from '../Header'
import Stories from './Stories'
import Posts from './Posts'
// CSS-IN-JS
import {
  BgContainer,
  HomeBgContainer,
  HomeResponsiveContainer,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <BgContainer>
        <Header />
        <HomeBgContainer>
          <HomeResponsiveContainer>
            <Stories />
            <Posts />
          </HomeResponsiveContainer>
        </HomeBgContainer>
      </BgContainer>
    )
  }
}

export default Home
