import React from 'react'
import styled from 'styled-components'
import {Cell} from '../Cell/Cell'

const StyledBoard = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},calc(25vw/${props => props.width})
    );

    grid-template-columns: repeat(${props => props.width},1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;

`
const Board = ({ board }) => {
    return (
        <StyledBoard width={board[0].length} height={board.length} >
            {
                board.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} isGhost={cell[2]} />))
            }
        </StyledBoard>
    )
}

export default Board