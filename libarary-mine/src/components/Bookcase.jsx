import React from 'react'
import BookcaseCSS from "../styles/bookcase.module.css"
const Bookcase = ({children}) => {
  return (
    <div className={BookcaseCSS.bookcase}>
  <div className={BookcaseCSS.container}>
    {children}
  </div>
  <div className={BookcaseCSS.cabinet}>
    <span className="door">&#128996;</span>
    <span className="door">&#128996;</span>
  </div>
    </div>
  )
}

export default Bookcase