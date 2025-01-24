import React from 'react'
import { useState } from 'react'
import Chessboard from './components/Chessboard'
import CSS from '../src/styles/App.module.css'
import ColorSelection from './components/ColorSelection'

type Color =  'white' | 'black';

const App = () => {
  const [color, setColor] = useState<Color>('white');
  return (
    <div className={CSS.page}>
        <Chessboard/>
        <ColorSelection setter={setColor}/>
    </div>
  )
}

export default App