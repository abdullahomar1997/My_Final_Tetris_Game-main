import { useCallback, useState } from "react";
import { BOARD_WIDTH } from "../../components/utils/gameHelpers";
import { tetrominoPreviews,updateTetrominoPreviews } from "../../components/utils/tetrominoes";

const createPlayer = (tetrominoes) => {
    return {
        position: { row: BOARD_WIDTH / 2 - 2, column: 0 },
        tetromino: tetrominoes.pop().shape,
        isCollided: false,
        tetrominoes,
        isFastDropping: false,
    };
}

export const usePlayer = () => {

    const [player, setPlayer] = useState(() => createPlayer(tetrominoPreviews(5)));

    const resetPlayer = useCallback((currentPlayer) => {

        let newTetrominoPreviews = updateTetrominoPreviews(currentPlayer.tetrominoes);

        setPlayer(() => createPlayer(newTetrominoPreviews));
        
    }, []);

    const updatePlayerPosition = ({ row, column, isCollided }) => {
        setPlayer(prev => ({
            ...prev,
            position: { row: row, column: (column) },
            isCollided
        }))
    }

    return {player, resetPlayer, updatePlayerPosition, setPlayer};
}

