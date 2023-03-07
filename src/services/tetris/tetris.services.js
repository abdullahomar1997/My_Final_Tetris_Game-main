// const movePlayer = (direction) => {
        
//         const desiredNextPosition = {
//             row: player.position.row + direction,
//             column: player.position.column 
//         };

//         if (!checkCollision(player.tetromino, board, desiredNextPosition)) {
//             updatePlayerPosition(desiredNextPosition)
//         }
//     }

//     const fastDropPlayer = () => {
        
//         const dropPosition = findDropPosition({
//             board:board,
//             position:player.position,
//             tetromino:player.tetromino
//         })
//         updatePlayerPosition({ row: dropPosition.row, column: dropPosition.column, isCollided: true })
//     }

//     const dropPlayer = () => {

//         const desiredNextPosition = {
//             row: player.position.row,
//             column: player.position.column + 1,
//         };

//         if (!checkCollision(player.tetromino, board, desiredNextPosition)) {
//             updatePlayerPosition({ ...desiredNextPosition, isCollided: false })
//         } else {
//             if (player.position.column < 1) {
//                 setGameOver(true);
//                 setDropTime(null)
//             }
//             updatePlayerPosition({ ...player.position, isCollided: true })
//         }
//     }

//     const rotatePlayer = (board, direction) => {
//         const clonedPlayer = JSON.parse(JSON.stringify(player));
//         clonedPlayer.tetromino = rotatedTetromino(clonedPlayer.tetromino, direction);

//         const position = clonedPlayer.position.row;

//         let offset = 1;

//         const desiredNextPosition = {
//             row:clonedPlayer.position.row ,
//             column: clonedPlayer.position.column
//         };

//         while (checkCollision(clonedPlayer.tetromino, board, desiredNextPosition)) {
//             clonedPlayer.position.row += offset;
//             offset = -(offset + (offset > 0 ? 1 : -1));
//             if (offset > clonedPlayer.tetromino[0].length) {
//                 rotatedTetromino(clonedPlayer.tetromino, -direction);
//                 clonedPlayer.position.row = position;
//                 return;
//             }
//         }
//         setPlayer(clonedPlayer)
//     }
    