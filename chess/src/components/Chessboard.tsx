import React from 'react';
import { useReducer } from 'react';
import key from "../modules/keyGenerator.ts";
import CSS from '../styles/ChessboardCSS.module.css';
import GridSquare from './GridSquare.tsx';

class Square {
  constructor(
    public id: number,
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


interface Action {
  type: "reset" | "move" | "start"
}

function reducer(state: Square[], action: Action) {
  const { type } = action;
  
   switch (type) {
    case "start":
      state.map((item) => {
        if (item.id == 53) {
          item.piece = 400
        }
      })
   }
}
const Chessboard = () => {
  const [state, dispatch] = useReducer(reducer, demo);
  const changeSquare = (inputId: number) => {
    const id = inputId
    console.log(id)
  }
  return (
    <div className={CSS.chessboard}>
      {state.map((item: Square) => 
      <GridSquare squareClass={`${item.white ? CSS.white : CSS.black}`}
      key={item.id}
      onClickHandler={() => { changeSquare(item.id)}}
      children={"ello"}
      />
      )}
    </div>
  )
}

export default Chessboard