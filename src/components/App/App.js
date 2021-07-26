import React from 'react'
import { Route } from 'react-router-dom'
import AllPosts from '../AllPosts/AllPosts'
import './App.css';

const App = () => {
  return (
    <main>
      <h1>Posts</h1>
      <Route
      exact path='/'
      render={() => {
        return (
          <AllPosts />
        )
      }}
      />
    </main>
  )
}

export default App;
