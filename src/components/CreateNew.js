


import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

// Custom hook for form 
import { useField } from '../hooks/index'



const CreateNew = (props) => {
    // Was used before exec. 7.4
    //const [content, setContent] = useState('')
    //const [author, setAuthor] = useState('')
    //const [info, setInfo] = useState('')
  
    // Hook for rerouting
    const history = useHistory();

    // Hooks for form 
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('handleSubmit')
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
  
    return (
      <div>

        <h2>create a new anecdote</h2>

        {/* Hook solution 1 with spread attributes */}
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content}/>
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...info} />
          </div>
          <button>create</button>
        </form>

        {/* Hook solution 2  */}
{/*         <form onSubmit={handleSubmit}>
          <div>
            content
            <input type={content.type} value={content.value} onChange={content.onChange} />
          </div>
          <div>
            author
            <input type={author.type} value={author.value} onChange={author.onChange} />
          </div>
          <div>
            url for more info
            <input type={info.type} value={info.value} onChange={info.onChange} />
          </div>
          <button>create</button>
        </form> */}

{/* Was used before exec. 7.4 custom hook */}
{/*         <form onSubmit={handleSubmit}>
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
        </form> */}

      </div>
    )
  
}

export default CreateNew