import React from 'react'
import AllPosts from '../AllPosts/AllPosts'
import Modal from 'react-modal'
import './App.css';

Modal.setAppElement('#root')

const App = () => {
  return (
    <main>
      <h1>Posts</h1>
      <AllPosts />
    </main>
  )
}

export default App;
