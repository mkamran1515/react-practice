import React from 'react';
import Book from './Book'; 
import books from './booksdata';
import Forms from './Forms';

function BookList() {
  const booksData = books.map( (book, id)=>{
    return <Book link={book.link} title={book.title} author={book.author} img={book.img} key={book.id} />
  });
  return (
    <>
     <Forms />
     <div className='book-container'>
     {booksData}
    </div>
    </>
  )
}

export default BookList