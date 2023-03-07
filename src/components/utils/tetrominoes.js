export const TETROMINOES = {
    0: { shape: [[0]], color: '0,0,0' },
    I: {
        name: "I",
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80,227,230'
    },
    J: {
        name: "J",
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '36,95,223'
    },
    L: {
        name: "L",
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '223,173,36'
    },
    O: {
        name: "O",
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '223,217,36'
    },
    Z: {
        name: "Z",
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227,78,78'
    },
    T: {
        name: "T",
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '132,61,198'
    },
    S: {
        name: "S",
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48,211,56'
    },
}

export const randomTetrominoes = () => {
    const tetrominoes = "IJLOSTZ";
    const randomTetromino = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
    return TETROMINOES[randomTetromino];
}

export const rotatedTetromino = (matrix, direction) => {

    const rotatedMatrix = matrix.map((_, index) =>
        matrix.map(column => column[index])
    );

    if (direction > 0) return rotatedMatrix.map(row => row.reverse());
    return rotatedMatrix.reverse();
}

export const tetrominoPreviews = (numberOfTetrominoes) => {
    return Array.from(Array(numberOfTetrominoes + 1), () => randomTetrominoes());
}

export const updateTetrominoPreviews = (tetrominoes) => {

    let tempTetrominoes = [...tetrominoes];
    tempTetrominoes.unshift(randomTetrominoes());

    return tempTetrominoes;
}
