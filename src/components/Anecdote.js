
// Component to render one anecdote with url "/anecdotes/<id>"

import React from 'react'

import { useParams } from "react-router-dom"
  
const Anecdote = ({ anecdotes }) => {

    const id = useParams().id    
    const anecdoteToDisplay = anecdotes.find(n => n.id === id)
    
    return (
        <div>
            <h2>{anecdoteToDisplay.content} by {anecdoteToDisplay.author}</h2>
            <div>has {anecdoteToDisplay.votes} votes</div>
            <br/>
            <div>for more information see <a href={anecdoteToDisplay.info}>{anecdoteToDisplay.info}</a></div>
            <br/>
      </div>
    )
}

export default Anecdote
