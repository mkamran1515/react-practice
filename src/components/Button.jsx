import React from 'react'

function Button(props) {
  return (
    <a rel="noreferrer" target="_blank" href={props.link} className='view-more' >View</a>
  )
}

export default Button