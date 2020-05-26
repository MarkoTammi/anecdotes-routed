


import React, { } from 'react'
import { useHistory } from "react-router-dom"

// Custom hook for form 
import { useField } from '../hooks/index'


const CreateNew = (props) => {

    // Hook for rerouting
    const history = useHistory();

    // Hooks for form 
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')


    const handleCreate = (e) => {
      e.preventDefault()
      //console.log('handleSubmitCreate')
      props.addNew({
        content: content.value ,
        author: author.value,
        info: info.value,
        votes: 0
      })

      props.setNotification(content.value)
      // Reroute to '/'-AnecdoteList when new anecdote have been created
      history.push('/')
      // Clear notification msg after timeout and stay AnecdoteList component
      setTimeout( () => {
        props.setNotification('')}, 10000)

    }
  
    const handleReset = (e) => {
      e.preventDefault()
      //console.log('handleReset')
      content.reset()
      author.reset()
      info.reset()
      history.push('/create')
    }

    return (
      <div>

        <h2>create a new anecdote</h2>

        {/* Hook solution 1 with spread attributes */}
        <form id='form' onSubmit={handleCreate}>
          <div>
            content
            <input {...content} reset='reset' />
          </div>
          <div>
            author
            <input {...author} reset='reset' />
          </div>
          <div>
            url for more info
            <input {...info} reset='reset'/>
          </div>
          <button>create</button>
          <button onClick={handleReset}>reset</button>
        </form>

      </div>
    )
  
}

export default CreateNew