import React, { Component } from 'react'
import './PostInfo.css'
import { retrieveUserData } from '../../utilities/apiCalls'

class PostInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      userId: props.userId,
      title: props.title,
      body: props.body
    }
  }

  componentDidMount() {
    retrieveUserData(this.state.id)
      .then(data => {
        this.setState({ name: data.name, catchPrase: data.company.catchPhrase })
      })
      .catch((error) => this.setState({ error: `Error: ${error}`}))
  }

  render() {
    return (
      <>
        <h2>All Posts Previews</h2>
        <p>{this.state.title}</p>
      </>
    )
  }
}

export default PostInfo
