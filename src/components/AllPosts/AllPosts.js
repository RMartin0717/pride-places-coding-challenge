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

  //fetch data for all posts
  //iterate over data and create instances of PostPreview
  //render all the previews

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
