import React from 'react'
import styled from 'styled-components';

const MenuContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    z-index: 100;

    button{
        padding: 40px 80px;
        font-size: 2em;
        border-radius: 20px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 60px;
        cursor: pointer;
    }
`

const Menu = ({ onClick, setSelectedMenu }) => {

    return (
        <MenuContainer>
            <button onClick={() => setSelectedMenu("Tetris")} >
                Play Tetris
            </button>
            <button onClick={() => setSelectedMenu("Instructions")} >
                How TO PLAY
            </button>
            <button onClick={() => setSelectedMenu("Settings")} >
                SETTINGS
            </button>
            <button onClick={() => setSelectedMenu("Statistics")} >
                STATISTICS
            </button>
        </MenuContainer>
    )
}

export default Menu