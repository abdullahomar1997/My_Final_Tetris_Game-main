import React, { useState } from 'react'
import styled from 'styled-components';
import Instructions from '../../features/instructions/screens/Instructions';
import Menu from './Menu';
import Settings from '../../features/settings/screens/Settings';
import Statistics from '../../features/statistics/screens/Statistics';
import Tetris from '../../features/tetris/screens/Tetris';
import { TetrisContextProvider } from '../../services/tetris/tetris.context';
 
const GameContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    overflow: hidden;
`
const Game = () => {

    const [selectedMenu, setSelectedMenu] = useState("");
    return (
        <GameContainer>
            {(() => {
                if (selectedMenu === "Tetris") {
                    return (
                        <TetrisContextProvider>
                            <Tetris/>
                        </TetrisContextProvider>
                    )
                } else if (selectedMenu === "Instructions") {
                    return (
                        <Instructions />
                    )
                } else if (selectedMenu === "Settings") {
                    return (
                        <Settings />
                    )
                } else if (selectedMenu === "Statistics") {
                    return (
                        <Statistics />
                    )
                } else if (selectedMenu === "") {
                    return (
                        <Menu setSelectedMenu={setSelectedMenu} />
                    )
                }
            })()}
        </GameContainer>
    )
}

export default Game

    /* background: url(${bgImage}) #000; */
