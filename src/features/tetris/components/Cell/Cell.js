import React from 'react'
import { TETROMINOES } from '../../../../components/utils/tetrominoes'
import { StyledCell } from './StyledCell'

export const Cell = ({ type,isGhost }) => {

    let color = TETROMINOES[type].color;

    if(isGhost === 100){
        color = "0,44,0";
    }

    return (
        <StyledCell type={type} isGhost={isGhost} color={color} />
    )
}

export default React.memo(Cell)