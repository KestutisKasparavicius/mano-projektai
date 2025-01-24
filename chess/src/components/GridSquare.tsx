import React from 'react'

const GridSquare = ({ children, squareClass, onClickHandler }) => {
  return (
    <div className={squareClass} onClick={onClickHandler}>
        {children}
    </div>
  )
}

export default GridSquare