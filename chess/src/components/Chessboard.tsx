import React from 'react'
import { useState } from 'react'
import CSS from '../styles/ChessboardCSS.module.css'


class Square {
  constructor(active: boolean , colour: 'white' | 'black', file: string, rank: number, piece: 'pawn' | 'rook' | 'bishop' | 'knight' | 'queen' | 'king'){
    
  }

}
function gridGenerator(width: number, height: number) {
    const cells: number = width * height;
    const grid: number[] = [];
    for (let i = 0; i < cells; i++) {

      grid.push(i);
    }
    return grid
}
const demo = gridGenerator(8,8)
const chessboard = () => {

  return (
    <div>
      {demo.map(item => <div>{item}</div>)}
    </div>
  )
}

export default chessboard