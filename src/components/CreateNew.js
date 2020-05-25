


import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory
} from "react-router-dom"



const CreateNew = (props) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')
  
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('handleSubmit')
      props.addNew({
        content,
        author,
        info,
        votes: 0
      })
      console.log('content', content)
      props.setNotification(content)
      // Reroute to '/'-AnecdoteList when new anecdote have been created
      history.push('/')
      // Clear notification msg after timeout and stay AnecdoteList component
      setTimeout( () => {
        props.setNotification('')}, 10000)

    }
  
    return (
      <div>

        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div>
            author
            <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            url for more info
            <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
}

export default CreateNew