type BoardItem = { rank: number; file: string; piece?: string; [key: string]: any };
export default {
    start: (board: BoardItem[]) => {
        // laikyti gatova chessboarda, kad kai bus daromi veiksmai, naudoti kaip refrence kurie pajudejo ir nebeturi "specialiu" ejimu pvz pawn 2 tile 1st

        let populated = board.map(item => 
            item.rank === 7 || item.rank === 2 ? { ...item, piece: "pawn" } : item
        );

        populated = populated.map(item => {
           if ((item.file === "a" || item.file === "h") && (item.rank == 1 || item.rank == 8)) {
            return {...item, piece: "rook"} 
           } else {
            return item
           }
        })

        populated = populated.map(item => {
            if ((item.file === "b" || item.file === "g") && (item.rank == 1 || item.rank == 8)) {
                return {...item, piece: "knight"} 
               } else {
                return item
               }
            
        })

        populated = populated.map(item => {
            if ((item.file === "c" || item.file === "f") && (item.rank == 1 || item.rank == 8)) {
                return {...item, piece: "bishop"} 
               } else {
                return item
               }
            
        })

        populated = populated.map(item => {
            if ((item.file === "d") && (item.rank == 1 || item.rank == 8)) {
                return {...item, piece: "king"} 
               } else if ((item.file === "e") && (item.rank == 1 || item.rank == 8)){
                return {...item, piece: "queen"}
               } else {
                return item
               }
            
        })
        return populated
    }
};
