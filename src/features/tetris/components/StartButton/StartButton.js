import React from 'react'
import "./StartButton.css"

const StartButton = ({ callback }) => {
    return (
        <div className="styledStartButton" onClick={callback} >Start Game</div>
    )
}

export default StartButton