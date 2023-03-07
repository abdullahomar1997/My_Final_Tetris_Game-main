import { useState } from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';

const useGameStatus = (rowsCleared) => {

    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);


    const calcScore = useCallback(() => {
        const linePoints = [40, 100, 300, 1200];

        //We have Score
        if (rowsCleared > 0) {
            //This is how original tetris score is calculated
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev * rowsCleared);
        }
    }, [level, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel]
}

export default useGameStatus