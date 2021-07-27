import React, { useState } from 'react'
import PostInfo from '../PostInfo/PostInfo'
import Modal from 'react-modal'
import './PostPreview.css'
//import React tools , related CSS files, API calls used for this file, and needed components


const PostPreview = ({ id, userId, title, body }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  //modalIsOpen is used to control whether or not the modal is visible for each post

  return (
    <article className='post-preview'>
      <div className='title-container'>
        <h3 className='title'>{title}</h3>
      </div>
      <button onClick={() => setModalIsOpen(true)} className='button'>View Details</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsOpen(false)}
        style={
          {
            overlay: {
              backgroundColor: 'rgba(64, 75, 92, 0.6)'
            },
            content: {
              border: '1px solid black'
            }
          }
        }
      >
        <PostInfo
          id={id}
          userId={userId}
          title={title}
          body={body}
          closeButton={()=>setModalIsOpen(false)}
        />
      </Modal>
    </article>
  )
  //Each instance of PostPreview displays the title of the post and
  //has its own button for opening a modal displaying PostInfo.
  //When the modal is open, an instance of PostInfo is created,
  //data that was passed in as props from the initial network request is passed
  //into this instance of PostInfo.
  //The setModalIsOpen function is also passed as props
  //which allows the user to later click a close button in order to close the modal
}

export default PostPreview
