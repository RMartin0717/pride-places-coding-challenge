import React, { Component } from 'react'
import './AllPosts.css'
import PostPreview from '../PostPreview/PostPreview'

class AllPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <>
        <h2>All Posts Previews</h2>
        <PostPreview />
      </>
    )
  }
}

export default AllPosts
