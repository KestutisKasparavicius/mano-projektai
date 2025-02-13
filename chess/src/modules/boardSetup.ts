type BoardItem = { rank: number; piece?: string; [key: string]: any };
export default {
    start: (board: BoardItem[]) => {
        // Filter board to only include specific ranks
        let partialBoard = board.filter(item => item.rank > 6 || item.rank < 3);

        // Populate board with "pawn" pieces for ranks 2 and 7
        const populated = partialBoard.map(item => 
            item.rank === 7 || item.rank === 2 ? { ...item, piece: "pawn" } : item
        );

        console.log(populated);
    }
};
