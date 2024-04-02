// CSS-IN-JS
import {
  BgContainer,
  ResponsiveContainer,
  ImageContainer,
  Image,
  Heading,
  Text,
  HomeButton,
} from './styledComponents'

const NotFound = props => {
  const onclickHomeButton = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <BgContainer>
      <ResponsiveContainer>
        <ImageContainer className="mb-3">
          <Image
            src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1699880393/Group_1_a8tpdb.svg"
            alt="Not found"
          />
        </ImageContainer>
        <Heading>Page Not Found</Heading>
        <Text>
          we are sorry, the page you requested could not be found. Please go
          back to the homepage.
        </Text>
        <HomeButton onClick={onclickHomeButton} type="button">
          Home Page
        </HomeButton>
      </ResponsiveContainer>
    </BgContainer>
  )
}

export default NotFound
