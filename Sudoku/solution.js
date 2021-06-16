var solveSudoku = function(board) {
    solveBoard(board);
};

var solveBoard = function(board) {
    for (let row = 0; row < 9; row ++) {
        for(let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                for (let i = "1"; i <= "9"; i++) {
                    let isValid = isSatisfied(board, row, col, i);
                    if (isValid) {
                        board[row][col] = ""+i;
                        // console.log(board);
                        if (solveBoard(board)) 
                            return true;
                    }
                    board[row][col] = ".";
                }
                return false;
            }
        }
    }
    return true;
}

var isPresentInRow = function(board, row, value) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] == value) return true;
    }
    return false;
}

var isPresentInCol = function(board, col, value) {
    for (let row = 0; row < 9; row++) {
        if (board[row][col] == value) return true;
    }
    return false;
}

var isPresentInBox = function(board, startRow, startCol, value) {
    for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
            if(board[row][col] == value) return true;
        }
    }
    return false;
}

var isSatisfied = function (board, row, col, value) {
    return !isPresentInCol(board, col, value) && !isPresentInRow(board, row, value) && !isPresentInBox(board, row - row%3, col -col%3, value);
}

board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
solveSudoku(board);

console.log(board);