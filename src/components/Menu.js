


import React from 'react'
import { Link } from "react-router-dom"

const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>

{/*     //Original stuff - to be removed
        <a href='#' style={padding}>anecdotes</a>
        <a href='#' style={padding}>create new</a>
        <a href='#' style={padding}>about</a> */}

        <Link style={padding} to="/">anecdotes</Link>
        <Link style={padding} to="/create">create new</Link>
        <Link style={padding} to="/about">about</Link>


      </div>
    )
  }

export default Menu
