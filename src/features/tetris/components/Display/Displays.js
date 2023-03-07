import React from 'react'
import Display from './Display'

const Displays = ({ gameOver, score, rows, level }) => {
    return (
        <div>
            {gameOver ? (
                <Display gameOver={gameOver} text="GameOver" />
            ) : (
                <div>
                    <Display text={`Score ${score} `} />
                    <Display text={`Rows ${rows} `} />
                    <Display text={`Level ${level} `} />
                </div>
            )}
        </div>
    )
}

export default Displays