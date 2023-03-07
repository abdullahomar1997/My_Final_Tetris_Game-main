import { useEffect, useState } from "react";
import { checkCollision } from "../../components/utils/gameHelpers";

const BOARD_WIDTH = 12;
const BOARD_HEIGHT = 20;

const createBoard = () =>
    Array.from(Array(BOARD_HEIGHT), () =>
        new Array(BOARD_WIDTH).fill([0, 'clear',0])
    )

export const useBoard = (player,resetPlayer) => {

    const [board, setBoard] = useState(createBoard());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {

        setRowsCleared(0);

        const sweepRows = newBoard =>
            newBoard.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1)
                    ack.unshift(new Array(newBoard[0].length).fill([0, "clear",0]));
                    return ack;
                }
                ack.push(row);
                return ack;
            }, [])

        const updateBoard = (prevBoard) => {

            const { tetromino, position } = player;

            const newBoard = prevBoard.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear',0] : cell)),
            );
        
            const dropPosition = findDropPosition({
                board:prevBoard,
                position,
                tetromino
            })

            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newBoard[y + dropPosition.column][x + dropPosition.row] = [value, `${player.isCollided ? 'merged' : 'clear'}`,100];
                        newBoard[y + player.position.column][x + player.position.row] = [value, `${player.isCollided ? 'merged' : 'clear'}`, 0];
                    }
                })
            })

            if (player.isCollided) {
                resetPlayer(player);
                return sweepRows(newBoard);
            }

            return newBoard;
        }

        setBoard(prev => updateBoard(prev));

    }, [player, resetPlayer]);

    return [board, setBoard, rowsCleared]
}

export const findDropPosition = ({ tetromino,board, position }) => {

    let max = BOARD_HEIGHT - position.column;
    let column = 0;

    for (let i = 0; i < max; i++) {

        if(checkCollision(tetromino, board, { row: position.row, column})){
            break;
        }
        column = position.column + i;
    }

    return { ...position, column:column-1 }

}
