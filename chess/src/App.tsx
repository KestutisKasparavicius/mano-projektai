import React from 'react'
import Chessboard from './components/Chessboard'
import CSS from '../src/styles/App.module.css'
const App = () => {
  return (
    <div className={CSS.page}>
        <Chessboard/>
    </div>
  )
}

export default App