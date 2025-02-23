import React from 'react';
import { useReducer } from 'react';
import key from "../modules/keyGenerator.ts";
import CSS from '../styles/ChessboardCSS.module.css';
import GridSquare from './GridSquare.tsx';
import Chesspiece from './Chesspiece.tsx';
import file from '../modules/fileGenerator.ts';
import boardSetup from '../modules/boardSetup.ts';
class Square {
  constructor(
    public id: number,
    public active: boolean = false,
    public white: boolean = true,
    public file: string,
    public rank: number,
    public piece: number = 1
    // public piece: 'pawn' | 'rook' | 'bishop' | 'knight' | 'queen' | 'king' = 'pawn'
    
    //
    // laikinai paliksim number del debuginimo
  ) {}
}

//
// Po kurio laiko sutvarkyti modulius i viena kintamaji, nes dabar griozdiskai atrodo 

function rowGenerator(array: Square[], param: boolean, rank: number) {
  const helper = key();
  const helperForFile = (input: number) => file(input)
  if (param == true) {
    for (let i = 1; i < 9; i++) {
      if (i % 2 == 0) {
        const square = new Square(helper.getKey(),true, true, helperForFile(i),rank, helper.getKey())
        helper.upKey()
        array.push(square)
    }
        else {
          const square = new Square(helper.getKey(),true, false, helperForFile(i),rank, helper.getKey())
          array.push(square)
          helper.upKey()
        }

    }
  } else {
    for (let i = 1; i < 9; i++) {
      if (i % 2 == 0) {
        const square = new Square(helper.getKey(),true, false, helperForFile(i),rank, helper.getKey())
        helper.upKey()
        array.push(square)
    }
        else {
          const square = new Square(helper.getKey(),true, true, helperForFile(i),rank, helper.getKey())
          helper.upKey()
          array.push(square)
        }
    }
  }
  
}



function gridGenerator() {
    const grid: Square[] = [];
    for (let i = 1; i < 9 ; i++) {
      if (i % 2 == 0) {
        rowGenerator(grid, true, 9-i)
      } else {
        rowGenerator(grid, false, 9-i)
      }
     
    }
    return grid
}
//
// Ziauriai keistai veikia map, pakeitus reducerio antra parama is demo i demoPre jis dabar rodo modifikuota array'u, pakeist veliau!
const demo = gridGenerator();


const demoFFF = boardSetup
let demoSomething = demoFFF.start(demo)
//   console.log(demoPre);
// console.log(demo);

interface Action {
  type: "reset" | "move" | "start"
}

function reducer(state: Square[], action: Action) {
  const { type } = action;
  
   switch (type) {
    case "start":
    
        console.log(state)
      
   }
}
const Chessboard = () => {
  const [state, dispatch] = useReducer(reducer, demoSomething);
  const changeSquare = (inputId: number) => {
    const id = inputId
    console.log(id)
  }
  return (
    <div className={CSS.chessboard}>

      {state.map((item: Square) => 

      <GridSquare squareClass={`${item.white ? CSS.white : CSS.black}`}
      key={item.id}
      onClickHandler={() => {console.log(demoSomething); changeSquare(item.id)}}
      children={item.piece}
      />
      )}
    </div>
  )
}

export default Chessboard