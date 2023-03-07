import React, { createContext } from 'react'
import { useState } from 'react';
import { checkCollision, createBoard } from '../../components/utils/gameHelpers';
import { Action, actionForKey, actionIsDrop } from '../../components/utils/Input';
import { rotatedTetromino } from '../../components/utils/tetrominoes';
import { findDropPosition, useBoard } from '../hooks/useBoard';
import { useGameOver } from '../hooks/useGameOver';
import useGameStatus from '../hooks/useGameStatus';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';

export const TetrisContext = createContext();

export const TetrisContextProvider = ({ children }) => {

    const {gameOver, setGameOver, resetGameOver} = useGameOver();
    const {player, resetPlayer, updatePlayerPosition,setPlayer} = usePlayer();

    const [board, setBoard, rowsCleared] = useBoard(player, resetPlayer);

    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
    const [dropTime, setDropTime] = useState(null);

    useInterval(() => {
        dropPlayer();
    }, dropTime)

    const startGame = () => {
        resetGameOver();
        setBoard(createBoard());
        resetPlayer(player);
        setDropTime(1000)
        setScore(0)
        setRows(0)
        setLevel(0)
    }

    const onKeyDown = ({ code }) => {
        
        const action = actionForKey(code);
        
        if (action === Action.Pause) {
            if (dropTime) {
                // pauseDropTim();
            }
            else {
                // resumeDropTime();
            }
        }
        
        else if (action === Action.Quit) {
            setGameOver(true);
        }
        
        else {
            if (actionIsDrop(action)){ 
                // pauseDropTime();
            }
            
            else if (!action) return;
            else if (action === Action.Rotate) {
                rotatePlayer(board, 1);
            }
            if (action === Action.FastDrop) {
                fastDropPlayer();
            } else if (action === Action.SlowDrop) {
                dropPlayer();
            } else if (action === Action.Left) {
                movePlayer(-1);
            } else if (action === Action.Right) {
                movePlayer(1);
            } 
        }
    }

    const onKeyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200)
            }
        }
    }

    const movePlayer = (direction) => {
        
        const desiredNextPosition = {
            row: player.position.row + direction,
            column: player.position.column 
        };

        if (!checkCollision(player.tetromino, board, desiredNextPosition)) {
            updatePlayerPosition(desiredNextPosition)
        }
    }

    const fastDropPlayer = () => {
        
        const dropPosition = findDropPosition({
            board:board,
            position:player.position,
            tetromino:player.tetromino
        })
        updatePlayerPosition({ row: dropPosition.row, column: dropPosition.column, isCollided: true })
    }

    const dropPlayer = () => {

        const desiredNextPosition = {
            row: player.position.row,
            column: player.position.column + 1,
        };

        if (!checkCollision(player.tetromino, board, desiredNextPosition)) {
            updatePlayerPosition({ ...desiredNextPosition, isCollided: false })
        } else {
            if (player.position.column < 1) {
                setGameOver(true);
                setDropTime(null)
            }
            updatePlayerPosition({ ...player.position, isCollided: true })
        }
    }

    const rotatePlayer = (board, direction) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotatedTetromino(clonedPlayer.tetromino, direction);

        const position = clonedPlayer.position.row;

        let offset = 1;

        const desiredNextPosition = {
            row:clonedPlayer.position.row ,
            column: clonedPlayer.position.column
        };

        while (checkCollision(clonedPlayer.tetromino, board, desiredNextPosition)) {
            clonedPlayer.position.row += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.tetromino[0].length) {
                rotatedTetromino(clonedPlayer.tetromino, -direction);
                clonedPlayer.position.row = position;
                return;
            }
        }
        setPlayer(clonedPlayer)
    }
    
    return (
        <TetrisContext.Provider
            value={{
                board, gameOver, score, rows, level, startGame, onKeyDown, onKeyUp
            }}>
            {children}
        </TetrisContext.Provider>
    )
}