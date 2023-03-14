import React from 'react'
import Book from './Book'
import '../index.css'
import { books } from './Books'
import { greeting } from '../testing/testing'


//example of map
// const names =['john', 'peter','susan']
// const newNames = names.map((name)=>{
// console.log(name);
// return <h1>{name}</h1>
// })
// console.log(newNames);


const BookList = () => {
  console.log(greeting);
  return (
    <section className='booklist'>
      {books.map((book2) => {
        // eslint-disable-next-line no-lone-blocks
        {/* console.log(book) */ }
        return <Book key={book2.id} {...book2}></Book>
      })}
    </section>
  )
}


export default BookList