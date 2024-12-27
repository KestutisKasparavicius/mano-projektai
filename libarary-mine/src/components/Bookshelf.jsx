import React from 'react'
import BookshelfCSS from '../styles/bookshelf.module.css'
const Bookshelf = ({bookList, genre}) => {
  return (
    <div> 
    <span className={BookshelfCSS.genre}>{genre}</span>
    <ul className={BookshelfCSS.bookshelf}>
    {bookList.map((item) => {
      return ( 
      <li className={BookshelfCSS.book} key={item.id}>
        {item.pavadinimas} 
        <span className={BookshelfCSS.tooltip} title="description">
          {item.pavadinimas}
          <br />
          {item.autorius}
          <br />
          {item.puslapiai} puslapiai
          <br />
          
          <p className={BookshelfCSS.description}>
            {item.aprasimas}
          </p>
        </span>
        </li>
    )
    })}
  </ul>
  </div>
  )
}
Bookshelf.propTypes = {
  bookList: Array,
  genre: String
}
export default Bookshelf