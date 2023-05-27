import React from 'react'

const Author = (props) => {
    const styles = {
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: "400"
    };
  return (
    <>
      <p style={styles}> {props.author}</p>
    </>
  )
}

export default Author