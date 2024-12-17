import React from 'react'

const Bookcase = ({children}) => {
  return (
    <main>
    <div className="bookcase">
  <div className='bookshelf-container'>
    {children}
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