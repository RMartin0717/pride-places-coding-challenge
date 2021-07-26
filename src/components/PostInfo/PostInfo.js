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
    retrieveUserData(this.state.userId)
      .then(data => {
        this.setState({ name: data[0].name, catchPhrase: data[0].company.catchPhrase })
      })
      .catch((error) => this.setState({ error: `Error: ${error}`}))
  }

  render() {
    return (
      <>
        <h3>Post Info</h3>
        <p>Author: {this.state.name}</p>
        <p>Author's Catchphrase: {this.state.catchPhrase}</p>
        <p>Post Title: {this.state.title}</p>
        <p>{this.state.body}</p>
        <button onClick={this.props.closeButton}>Close</button>
      </>
    )
  }
}

export default PostInfo
