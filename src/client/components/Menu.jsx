import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineFeed } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { LuTrophy } from "react-icons/lu"
import { BiEditAlt } from "react-icons/bi"
import { IconContext } from "react-icons"

const Menu = () => {
  return (
    <IconContext.Provider value={{size: 40}} onMouseOver={({target})=>target.style.color="white"}>
        <nav>
            <NavLink to="/">
                <MdOutlineFeed className="nav-icon" />
            </NavLink>
            <NavLink to="/create">
                <BiEditAlt className="nav-icon" />
            </NavLink>
            <NavLink to="/search">
                <FiSearch className="nav-icon" />
            </NavLink>
            <NavLink to="/leaderboard">
                <LuTrophy className="nav-icon" />
            </NavLink>
            <NavLink to="/profile">
                <CgProfile className="nav-icon" />
            </NavLink>
        </nav>
    </IconContext.Provider>
  )
}

export default Menu
