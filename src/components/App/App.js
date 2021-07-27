import React from 'react'
import AllPosts from '../AllPosts/AllPosts'
import Modal from 'react-modal'
import './App.css';

Modal.setAppElement('#root')

const App = () => {
  return (
    <main>
      <h1 className='heading'>Posts</h1>
      <AllPosts />
    </main>
  )
}

export default App;
