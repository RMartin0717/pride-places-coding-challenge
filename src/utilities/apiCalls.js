const retrievePostsData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('No posts available. Please try again later.')
      } else {
        return response.json()
      }
    })
}

const retrieveUserData = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not find user information.')
      } else {
        return response.json()
      }
    })
}

export { retrievePostsData, retrieveUserData }
