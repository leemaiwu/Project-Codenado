import React from 'react'
import "./App.css"
import Menu from './components/Menu'
import {Routes, Route} from 'react-router-dom'
import Create from "./screens/Create"
import Leaderboard from "./screens/Leaderboard/"
import Newsfeed from "./screens/Newsfeed"
import Profile from "./screens/Profile"
import Search from "./screens/Search"
import Auth from './screens/Auth'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import GlobalState from './state/GlobalState'

function App() {

  const {state: {userId, token}} = useContext(GlobalState)

  return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Newsfeed />}/>
            <Route path='/create' element={token ? <Create /> : <Navigate to="/auth" />}/>
            <Route path='/leaderboard' element={<Leaderboard />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/profile' element={token ? <Profile /> : <Navigate to="/auth" />}/>
            <Route path='/auth' element={!token ? <Auth /> : <Navigate to='/' /> }/>
          </Routes>
        <Menu />
      </div>
  )
}

export default App
