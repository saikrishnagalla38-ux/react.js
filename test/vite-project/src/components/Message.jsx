import React from 'react'

function Message() {
    function sayHello() {
    console.log('Hello')
    }
  return (

    <button onClick={sayHello}>click me</button>
  )
}

export default Message