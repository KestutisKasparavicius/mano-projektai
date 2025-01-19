import React from 'react'
import { useState } from 'react'
import key from "../modules/keyGenerator.ts"
import CSS from '../styles/ChessboardCSS.module.css'


class Square {
  constructor(
    public id?: number,
    public active: boolean = false,
    public white: boolean = true,
    public file: string = 'a',
    public rank: number = 0,
    public piece: number = 1
    // public piece: 'pawn' | 'rook' | 'bishop' | 'knight' | 'queen' | 'king' = 'pawn'
    
    //
    // laikinai paliksim number del debuginimo
  ) {}
}


function rowGenerator(array: Square[], param: boolean) {
  const helper = key();
  if (param == true) {
    for (let i = 1; i < 9; i++) {
      if (i % 2 == 0) {
        const square = new Square(helper.getKey(),true, true, "b", 2, helper.getKey())
        helper.upKey()
        array.push(square)
    }
        else {
          const square = new Square(helper.getKey(),true, false, "b", 2, helper.getKey())
          array.push(square)
          helper.upKey()
        }

    }
  } else {
    for (let i = 1; i < 9; i++) {
      if (i % 2 == 0) {
        const square = new Square(helper.getKey(),true, false, "b", 2, helper.getKey())
        helper.upKey()
        array.push(square)
    }
        else {
          const square = new Square(helper.getKey(),true, true, "b", 2, helper.getKey())
          helper.upKey()
          array.push(square)
        }
    }
  }
  
}



function gridGenerator() {
    const grid: Square[] = [];
    for (let i = 1; i < 8 ; i++) {
      if (i % 2 == 0) {
        rowGenerator(grid, true)
      } else {
        rowGenerator(grid, false)
      }
     
    }
    return grid
}
const demo = gridGenerator()
console.log(demo)
const chessboard = () => {

  return (
    <div className={CSS.chessboard}>
      {demo.map(item => <div className={`${item.white ? CSS.white : CSS.black}` } key={item.id}>{item.piece}</div>)}
    </div>
  )
}

export default chessboard