import React from 'react'
import { useState } from 'react'
import Chessboard from './components/Chessboard'
import CSS from '../src/styles/App.module.css'

type Color =  'white' | 'black';

const App = () => {
  const [color, setColor] = useState<Color>('white');
  return (
    <div className={CSS.page}>
        <Chessboard/>
    </div>
  )
}

export default App