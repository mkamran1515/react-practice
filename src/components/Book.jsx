import React from 'react';
import Title from './Title';
import Image from './Image';
import Author from './Author';
import Button from './Button';

const  Book = (props) => {
  return (
    <div className='book'>
        <Image img={props.img}/>
        <Title title={props.title} />
        <Author author={props.author} />
        <Button link={props.link}/>
    </div>
  )
}

export default Book