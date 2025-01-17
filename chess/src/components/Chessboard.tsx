import React from 'react'
import { useState } from 'react'
import CSS from '../styles/ChessboardCSS.module.css'


class Square {
  constructor(
    public id?: number,
    public active: boolean = false,
    public white: boolean = true,
    public file: string = 'a',
    public rank: number = 0,
    public piece: 'pawn' | 'rook' | 'bishop' | 'knight' | 'queen' | 'king' = 'pawn'
  ) {}
}

function gridGenerator(width: number, height: number) {
    const cells: number = width * height;
    const grid: Square[] = [];
    for (let i = 1; i < cells; i++) {
      if (i % 2 == 0) {
        const square = new Square(i,true, false, "b", 2, "rook")
        grid.push(square);
      } else {
        const square = new Square(i,true, true, "b", 2, "rook")
        grid.push(square);
      }
     
    }
    return grid
}
const demo = gridGenerator(8,8)
const chessboard = () => {

  return (
    <div className={CSS.chessboard}>
      {demo.map(item => <div className={`${item.white ? CSS.white : CSS.black}`} key={item.id}>{item.piece}</div>)}
    </div>
  )
}

export default chessboard