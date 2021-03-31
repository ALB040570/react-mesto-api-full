// const jwt = localStorage.getItem('jwt');
const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;
const optionsForApi = {
  baseUrl: BASE_URL,
  // headers: {
  //   Authorization: `Bearer ${jwt}`,
  //   "Content-Type": "application/json",
  // },
  headers: {
    // authorization: '856155f9-12e9-47dc-bda9-cdcb166629fd',
    'Content-Type': 'application/json'
  },
  headersForAuth: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  dir: {
    usersMe: '/users/me',
    cards: '/cards',
    likes: '/cards/likes',
    avatar: '/users/me/avatar',
    signIn: '/signin',
    signUp: '/signup',
  }
}

export default optionsForApi;

