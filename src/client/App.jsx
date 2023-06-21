import React from 'react'
import "./App.css"
import Menu from './components/Menu'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from "./screens/Create"
import Leaderboard from "./screens/Leaderboard/"
import Newsfeed from "./screens/Newsfeed"
import Profile from "./screens/Profile"
import Search from "./screens/Search"

function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/create' element={<Create />}/>
            <Route path='/leaderboard' element={<Leaderboard />}/>
            <Route path='/' element={<Newsfeed />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/search' element={<Search />}/>
          </Routes>
        <Menu />
      </div>
    </Router>
  )
}

export default App
