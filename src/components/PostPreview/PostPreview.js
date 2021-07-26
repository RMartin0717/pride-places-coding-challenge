import React, { useState } from 'react'
import PostInfo from '../PostInfo/PostInfo'
import Modal from 'react-modal'
import './PostPreview.css'

const PostPreview = ({ id, userId, title, body }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <h4>{title}</h4>
      <button onClick={() => setModalIsOpen(true)}>View Modal</button>
      <Modal isOpen={modalIsOpen}>
        <PostInfo
          id={id}
          userId={userId}
          title={title}
          body={body}
          closeModal={()=>setModalIsOpen(false)}
        />
      </Modal>
    </>
  )
}

export default PostPreview
