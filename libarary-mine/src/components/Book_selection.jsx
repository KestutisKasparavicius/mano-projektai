import React from 'react'

const Book_selection = ({bookList, genre}) => {
  return (
    <label htmlFor="bookshelf"> {genre}
    <ul className="bookshelf">
    {bookList.map((item) => {
      return ( 
      <li className="book" key={item.id}> {item.pavadinimas} </li>
    )
    })}
  </ul>
  </label>
  )
}
Book_selection.propTypes = {Object, String}
export default Book_selection