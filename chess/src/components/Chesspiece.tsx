import React from 'react'

const Chesspiece = ({selection}: { selection: "pawn" | "rook" | "bishop" | "knight" | "queen" | "king" | " "}) => {
  const pieces = {
    pawn: "Pawn",
    rook: "Rook",
    bishop: "Bishop",
    knight: "Knight",
    queen: "Queen",
    king: "King",
  };

  return <>{pieces[selection]}</>;
};


export default Chesspiece