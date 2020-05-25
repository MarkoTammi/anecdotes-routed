

// Component to render notification 10 sek.


import React from 'react'


const Notification = (props) => {
    console.log('Notification component')

    const style = {
        border: 'solid',
        borderColor:'red',
    }

    return (
        <div>
            <p style={style}>NEW ANECDOTE ADDED : {props.notification}</p>
        </div>    

    )
}

export default Notification