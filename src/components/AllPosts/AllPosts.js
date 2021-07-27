import React, { useState, useEffect } from 'react'
import './AllPosts.css'
import PostPreview from '../PostPreview/PostPreview'
import { retrievePostsData } from '../../utilities/apiCalls'
//import React tools , related CSS files, API calls used for this file, and needed components


const AllPosts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  //implemented Hooks in place of class components
  //in order to improve readability as state is being passed as props
  //into PostPreview and then into PostInfo where data from another network request is used in tandem

  useEffect(() => {
    let mounted = true;
    retrievePostsData()
      .then(data => {
        if(mounted) {
          setPosts(data)
        }
      })
      .catch((error) => setError(`Error: ${error}`))
    return () => mounted = false
  })
  //this useEffect hook makes the network request to retrieve data for all of the posts
  //when the component mounts (on page load)
  //data from the GET request is stored in state as 'posts' and will be used later
  //to display all of the post titles and then in the post modals

  const allPosts = (data) => {
    const mappedPosts = data.map(post => {
      return (
        <PostPreview
          key = {post.id}
          id = {post.id}
          userId = {post.userId}
          title = {post.title}
          body = {post.body}
        />
      )
    })
    return mappedPosts
  }
  //the allPosts function uses data (sent is as an argument) and maps over the data
  //to create instances of PostPreview to display the title for each post

  return (
    <>
      <h2 className='heading'>All Posts Previews</h2>
      <section className='all-posts'>{allPosts(posts)}</section>
    </>
  )
  //in this return, JSX is used to display the section containing all of the posts
  //by passing posts from state into allPosts
}

export default AllPosts
