import React from 'react'

const Bookcase = ({bookList}) => {
  return (
    <main>
    <div className="bookcase">
  <div className='bookshelf-container'>
    <div className="bookshelf">
      {bookList.map((item) => {
        return ( 
        <div className="book" key={item.id}> {item.pavadinimas} </div>
      )
      })}
    </div>
    <div className="bookshelf"></div>
    <div className="bookshelf"></div>
  </div>
  <div className='cabinet'>
    <span className="door">&#128996;</span>
    <span className="door">&#128996;</span>
  </div>
    </div>
  </main>
  )
}

export default Bookcase