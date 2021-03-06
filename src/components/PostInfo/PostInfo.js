import React, { useState, useEffect } from 'react'
import './PostInfo.css'
import { retrieveUserData } from '../../utilities/apiCalls'
//import React tools , related CSS files, and API calls used for this file

const PostInfo = (props) => {
  const [userId] = useState(props.userId)
  const [title] = useState(props.title)
  const [body] = useState(props.body)
  const [name, setName] = useState('')
  const [catchPhrase, setCatchPhrase] = useState('')
  const [error, setError] = useState('')


  useEffect(() => {
    let mounted = true;
    retrieveUserData(userId)
      .then(data => {
        if(mounted) {
          setName(data[0].name)
          setCatchPhrase(data[0].company.catchPhrase)
        }
      })
      .catch((error) => setError(`Error: ${error}`))
    return () => mounted = false
  })
  //When a PostPreview is clicked and props from that post are passed in for this new instance
  //of PostInfo, the userId for the post is taken in order to make a GET request to obtain more
  //information about the author.

  return (
    <div className='modal'>
      <h3 className='modal-text'>{title.toUpperCase()}</h3>
      <h4 className='modal-text'>Author: {name}</h4>
      <h5 className='modal-text catch-phrase'>Author's Catchphrase: {catchPhrase}</h5>
      <p className='modal-text body'>{body}</p>
      <button onClick={props.closeButton} className='button'>Close</button>
    </div>
  )
  //The return for PostInfo renders information passed down as props from AllPosts, into PostPreview, into PostInfo
  //pertaining to the title and body of the post
  //Data stored in state from the new network request (pertaining to author and author's catchphrase) is also displayed
  //A button for closing the modal is rendered with functionality passed in as props from PostPreview
}

export default PostInfo
