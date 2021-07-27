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

//retrievePostsData is the GET request to all posts
//This is called on mount in AllPosts.js to store data for all of the posts in state
//to be rendered to the page

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

//retrieveUserData is the GET request to retrieve data for a specific user
//It is called in PostInfo ONLY when a user clicks on a specific title
//to obtain the author's name and catchphrase for only that post

export { retrievePostsData, retrieveUserData }
