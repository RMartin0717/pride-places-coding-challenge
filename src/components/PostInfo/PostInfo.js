import React, { useState, useEffect } from 'react'
import './PostInfo.css'
import { retrieveUserData } from '../../utilities/apiCalls'

const PostInfo = (props) => {
  const [id, setId] = useState(props.id)
  const [userId, setUserId] = useState(props.userId)
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
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

  return (
    <>
      <h3>Post Info</h3>
      <p>Author: {name}</p>
      <p>Author's Catchphrase: {catchPhrase}</p>
      <p>Post Title: {title}</p>
      <p>{body}</p>
      <button onClick={props.closeButton}>Close</button>
    </>
  )
}

export default PostInfo
