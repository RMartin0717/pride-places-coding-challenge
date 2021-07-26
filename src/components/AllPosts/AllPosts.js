import React, { Component } from 'react'
import './AllPosts.css'
import PostPreview from '../PostPreview/PostPreview'
import { retrievePostsData } from '../../utilities/apiCalls'

class AllPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    retrievePostsData()
      .then(data => {
        this.setState({ posts: data })
      })
      .catch((error) => this.setState({ error: `Error: ${error}`}))
  }

  allPosts(data) {
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

  render() {
    return (
      <>
        <h2>All Posts Previews</h2>
        {this.allPosts(this.state.posts)}
      </>
    )
  }
}

export default AllPosts
