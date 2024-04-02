import React from 'react'

const instaShareContext = React.createContext({
  searchInput: '',
  onClickSearch: () => {},
  apiStatus: 'INITIAL',
  postsData: [],
  tryAgain: () => {},
})

export default instaShareContext
