import {
  UserProfileBgContainer,
  UserProfileBgContainerLg,
  ProfileBgContainer,
  ProfileImg,
  UserName,
  CountContainer,
  CountText,
  Count,
  UserId,
  UserBio,
} from './styledComponents'

const ProfileDetails = props => {
  const {userDetails} = props
  const {
    followersCount,
    followingCount,
    postsCount,
    profilePic,
    userBio,
    userId,
    userName,
  } = userDetails

  const renderUserProfileMobileDev = () => (
    <UserProfileBgContainer>
      <UserName>{userName}</UserName>
      <div className="d-flex">
        <ProfileBgContainer>
          <ProfileImg src={profilePic} alt="profile pic" />
        </ProfileBgContainer>
        <CountContainer>
          <div className="text-center">
            <Count as="span">{postsCount}</Count>
            <CountText>posts</CountText>
          </div>
          <div className="text-center">
            <Count as="span">{followersCount}</Count>
            <CountText> followers</CountText>
          </div>
          <div className="text-center">
            <Count as="span">{followingCount}</Count>
            <CountText>following</CountText>
          </div>
        </CountContainer>
      </div>
      <UserId>{userId}</UserId>
      <UserBio>{userBio}</UserBio>
    </UserProfileBgContainer>
  )

  const renderUserProfileLargeDev = () => (
    <UserProfileBgContainerLg>
      <ProfileBgContainer>
        <ProfileImg src={profilePic} alt="profile pic" />
      </ProfileBgContainer>
      <div>
        <UserName>{userName}</UserName>
        <CountContainer>
          <CountText>
            <Count as="span">{postsCount}</Count> posts
          </CountText>
          <CountText>
            <Count as="span">{followersCount}</Count>followers
          </CountText>
          <CountText>
            <Count as="span">{followingCount}</Count> following
          </CountText>
        </CountContainer>
        <UserId>{userId}</UserId>
        <UserBio>{userBio}</UserBio>
      </div>
    </UserProfileBgContainerLg>
  )

  return (
    <div>
      {renderUserProfileMobileDev()}
      {renderUserProfileLargeDev()}
    </div>
  )
}

export default ProfileDetails
