const retrievePostsData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if(!response.ok) {
        throw new Error('No posts available. Please try again later.')
      } else {
        return response.json()
      }
    })
}

// const retrieveUserData = (id) => {
//   //use interpolation later to get user data by id
// }

export { retrievePostsData }
