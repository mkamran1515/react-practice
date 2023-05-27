import React from 'react'

const Clicker = (e) => {
    e.preventDefault();
    alert("Clicked!");
}

const changeText = (e) => {
    console.log(e.target.value);
}

function Forms() {
    

  return (
    <>
      <form className='forms'>
        <input type='text' onChange={changeText} name='inputPrice' placeholder='Enter text' />
        <button className='btn' onClick={Clicker}>Clicker</button>
      </form>
    </>
  )
}

export default Forms