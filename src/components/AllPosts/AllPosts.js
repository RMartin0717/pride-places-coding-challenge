import React, { useState, useEffect } from 'react'
import './AllPosts.css'
import PostPreview from '../PostPreview/PostPreview'
import { retrievePostsData } from '../../utilities/apiCalls'



const AllPosts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')

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
  }, [setPosts])

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

  return (
    <>
      <h2>All Posts Previews</h2>
      {allPosts(posts)}
    </>
  )

}

export default AllPosts
