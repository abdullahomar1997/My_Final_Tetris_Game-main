export const BOARD_WIDTH = 12;
export const BOARD_HEIGHT = 20;

export const createBoard = () =>
    Array.from(Array(BOARD_HEIGHT), () =>
        new Array(BOARD_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (tetromino,board,position) => {

    for (let y = 0; y < tetromino.length; y++) {
        const column = y + position.column;

        for (let x = 0; x < tetromino[y].length; x++) {
            const row = x + position.row;

            //1. Check that we on an actual tetromino cell
            if (tetromino[y][x] !== 0) {
                //2. Check that our movve is inside the game areas height [y]
                //We shouldnt go through the bottom of the play area
                if (!board[column] ||
                    //3. Check that our move is inside the game areas width[x]
                    !board[column][row] ||
                    //4. Check that the cell we moving to isn't set to clear
                    board[column][row][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
}   
