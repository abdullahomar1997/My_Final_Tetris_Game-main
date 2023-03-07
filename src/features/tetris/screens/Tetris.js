import React from 'react'

import StartButton from '../components/StartButton/StartButton'
import Board from '../components/Board/Board'
import Displays from '../components/Display/Displays'
import { StyledTetris, StyledTetrisWrapper } from "../components/StyledTetris"
import { TetrisContext } from '../../../services/tetris/tetris.context'
import { useContext } from 'react'

const Tetris = () => {

    const { board, gameOver, score, rows, level, startGame, onKeyDown, onKeyUp } = useContext(TetrisContext)

    return (
        <StyledTetrisWrapper role='button' onKeyDown={e => onKeyDown(e)} tabIndex="0" onKeyUp={onKeyUp}>
            <StyledTetris>
                <Board board={board} />
                <aside>
                    <Displays gameOver={gameOver} score={score} rows={rows} level={level} />
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris

