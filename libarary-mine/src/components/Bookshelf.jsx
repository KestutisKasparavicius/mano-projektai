import React from 'react'
import BookshelfCSS from '../styles/bookshelf.module.css'
const Bookshelf = ({bookList, genre}) => {
  return (
    <label htmlFor={BookshelfCSS.bookshelf}> {genre}
    <ul className={BookshelfCSS.bookshelf}>
    {bookList.map((item) => {
      return ( 
      <li className={BookshelfCSS.book} key={item.id}> {item.pavadinimas} </li>
    )
    })}
  </ul>
  </label>
  )
}
Bookshelf.propTypes = {Object, String}
export default Bookshelf