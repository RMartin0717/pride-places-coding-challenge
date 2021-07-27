import React, { useState } from 'react'
import PostInfo from '../PostInfo/PostInfo'
import Modal from 'react-modal'
import './PostPreview.css'
//import React tools , related CSS files, API calls used for this file, and needed components


const PostPreview = ({ id, userId, title, body }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <h4>{title}</h4>
      <button onClick={() => setModalIsOpen(true)}>View Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
        <PostInfo
          id={id}
          userId={userId}
          title={title}
          body={body}
          closeButton={()=>setModalIsOpen(false)}
        />
      </Modal>
    </>
  )
}

export default PostPreview
